'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type PlaceOption = { label: string; value: string };

const PLACE_OPTIONS: PlaceOption[] = [
  { label: 'Monterrey, Mexico (MX)', value: 'Monterrey,MX|25.686614|-100.316113' },
  { label: 'Ciudad de México, Mexico (MX)', value: 'Ciudad de Mexico,MX|19.432608|-99.133209' },
  { label: 'Guadalajara, Mexico (MX)', value: 'Guadalajara,MX|20.659699|-103.349609' },
  { label: 'Mérida, Mexico (MX)', value: 'Merida,MX|20.967370|-89.592586' },
  { label: 'Monterrey (MX) - Aeropuerto (25.77, -100.11)', value: 'Monterrey,MX|25.77|-100.11' },
  // Añade aquí más ciudades con formato "Ciudad,PAIS|lat|lon"
];

export default function CartaNatalAvanzada() {
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState(''); // yyyy-mm-dd
  const [hora, setHora] = useState(''); // HH:MM
  const [noTime, setNoTime] = useState(false);
  const [placeInput, setPlaceInput] = useState('');
  const [placeValue, setPlaceValue] = useState(''); // lat|lon encoded string from datalist or custom
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Si el usuario escribe algo libremente en placeInput y presiona generar, usaremos placeInput como "city" sin coords.
  // Si el usuario selecciona una opción del datalist, usamos el value (que incluye lat|lon).
  // Puedes ampliar PLACE_OPTIONS con más ciudades/coords para mejorar el autocompletado.

  function handlePlaceSelectFromDatalist(val: string) {
    // El valor real del option (value) lo ponemos en el atributo value del option.
    // Cuando el usuario selecciona por UI, `val` será igual al value del option si el <option> lo definió así.
    // Aquí guardamos tanto el texto visible (placeInput) como el valor (placeValue).
    if (!val) {
      setPlaceValue('');
      setPlaceInput('');
      return;
    }

    // Si el string contiene '|', asumimos formato "Ciudad,PAIS|lat|lon"
    if (val.includes('|')) {
      const parts = val.split('|');
      setPlaceValue(val);
      setPlaceInput(parts[0]); // muestra la parte legible en el input
    } else {
      // Si no contiene, es texto libre (ciudad custom)
      setPlaceValue('');
      setPlaceInput(val);
    }
  }

  const generarCarta = () => {
    setError(null);

    // Validaciones mínimas
    if (!nombre.trim()) {
      setError('Por favor ingresa tu nombre completo.');
      return;
    }
    if (!fecha) {
      setError('Por favor selecciona tu fecha de nacimiento.');
      return;
    }
    // Si el usuario marcó "noTime" no pedir hora
    if (!noTime && !hora) {
      setError('Por favor indica tu hora de nacimiento o marca que no la conoces.');
      return;
    }

    setLoading(true);

    // Construir query string
    // Para lugar, si tenemos placeValue (formato con coords) lo pasamos entero, si no, pasamos placeInput (texto)
    const params = new URLSearchParams();
    params.set('nombre', nombre.trim());
    params.set('fecha', fecha); // formato ISO yyyy-mm-dd
    params.set('noTime', noTime ? '1' : '0');
    if (!noTime) params.set('hora', hora); // HH:MM
    // Lugar: si tenemos coords, pasamos la cadena; si no, pasamos texto libre
    if (placeValue) {
      params.set('lugar', placeValue); // ej. "Monterrey,MX|25.6866|-100.3161"
    } else if (placeInput.trim()) {
      params.set('lugar', placeInput.trim());
    }

    // También envía la zona horaria del navegador como ayuda (no reemplaza cálculo profesional)
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) params.set('tz', tz);
    } catch (e) {
      // ignore
    }

    // Redirigir a la página de resultados (app/carta-natal/resultado/page.tsx)
    // La página de resultado debe leer query params y mostrar el reporte completo y opciones de descarga.
    const url = `/carta-natal/resultado?${params.toString()}`;

    // push client-side
    router.push(url);
  };

  return (
    <section className="py-12 bg-[#FBF3FB] text-[#1f1630]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-[#9434ec]">
          Calcula tu Carta Natal
        </h2>

        <p className="text-center text-sm mb-6 text-[#22172f]/80">
          Introduce tus datos. Si no conoces tu hora de nacimiento, marca la casilla "No conozco mi hora" y el cálculo usará una hora por defecto (00:00) — para una interpretación más precisa intenta conseguir la hora exacta.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <label className="block">
            <span className="text-sm text-[#22172f]/90">Nombre completo</span>
            <input
              type="text"
              placeholder="Ej. Ana Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="mt-2 w-full p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm text-[#22172f]/90">Fecha de nacimiento</span>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              className="mt-2 w-full p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm text-[#22172f]/90">Hora de nacimiento</span>
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              disabled={noTime}
              className={`mt-2 w-full p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none ${noTime ? 'opacity-60' : ''}`}
            />
            <div className="mt-2 flex items-center gap-2">
              <input
                id="no-time-checkbox"
                type="checkbox"
                checked={noTime}
                onChange={(e) => setNoTime(e.target.checked)}
                className="h-4 w-4 rounded border-[#9434ec] text-[#9434ec]"
              />
              <label htmlFor="no-time-checkbox" className="text-sm text-[#22172f]/90">
                No conozco mi hora de nacimiento (opcional)
              </label>
            </div>
          </label>

          <label className="block">
            <span className="text-sm text-[#22172f]/90">Lugar de nacimiento</span>
            <input
              list="places"
              value={placeInput}
              onChange={(e) => {
                const v = e.target.value;
                setPlaceInput(v);
                setPlaceValue(''); // reset value until user selects an option
              }}
              onBlur={(e) => {
                // Si el usuario escribió exactamente uno de los option.value, tomar el coords.
                const v = e.target.value;
                const matched = PLACE_OPTIONS.find((opt) => opt.value === v);
                if (matched) {
                  handlePlaceSelectFromDatalist(matched.value);
                }
              }}
              placeholder="Ej. Monterrey, Mexico"
              className="mt-2 w-full p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
            />
            <datalist id="places">
              {PLACE_OPTIONS.map((p) => (
                // mostramos label para visual, pero el value guarda la cadena con coordenadas
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </datalist>
            <p className="text-xs mt-2 text-[#22172f]/70">Selecciona de la lista o escribe tu ciudad. Si seleccionas una ciudad con coordenadas, el cálculo será más preciso.</p>
          </label>
        </div>

        {error && <div className="text-center text-sm text-red-600 mb-4">{error}</div>}

        <div className="flex items-center justify-center">
          <button
            onClick={generarCarta}
            disabled={loading}
            className="bg-[#9434ec] hover:bg-[#7a2bc0] text-white font-semibold py-3 px-8 rounded-full transition w-full sm:w-auto block mx-auto"
          >
            {loading ? 'Generando...' : 'Generar Carta Natal'}
          </button>
        </div>

        <p className="text-xs text-center mt-4 text-[#22172f]/60">
          Al generar la carta serás llevado a la página de resultados donde podrás ver el gráfico completo y descargarlo en PDF o imagen.
        </p>
      </div>
    </section>
  );
}
