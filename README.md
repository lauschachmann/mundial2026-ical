# ⚽ Mundial 2026 — Calendario dinámico para iCal

Calendario que se actualiza automáticamente con los resultados reales del Mundial.

## Cómo instalarlo (5 pasos)

### Paso 1 — Crear cuenta en GitHub (si no tenés)
1. Ir a https://github.com
2. Click en "Sign up"
3. Seguir los pasos con tu email

### Paso 2 — Crear repositorio en GitHub
1. Loguearte en https://github.com
2. Click en el "+" arriba a la derecha → "New repository"
3. Nombre: `mundial2026-ical`
4. Dejarlo en "Public"
5. Click "Create repository"
6. Subir estos archivos (arrastrar o con el botón "uploading an existing file")

### Paso 3 — Deployar en Vercel
1. Ir a https://vercel.com
2. Click "Sign Up" → elegir "Continue with GitHub"
3. Autorizar a Vercel
4. Click "Add New Project"
5. Elegir el repositorio `mundial2026-ical`
6. Click "Deploy" (sin cambiar nada)
7. Esperar ~1 minuto → te da una URL tipo: `mundial2026-ical.vercel.app`

### Paso 4 — Suscribirse en iCal (iPhone/Mac)

**En iPhone:**
1. Ajustes → Calendario → Cuentas → Añadir cuenta → Otra
2. "Añadir calendario con suscripción"
3. Pegar la URL: `https://TU-URL.vercel.app/calendario.ics`
4. Siguiente → Guardar

**En Mac:**
1. Abrir Calendario
2. Archivo → Nueva suscripción de calendario
3. Pegar la URL y hacer clic en Suscribir
4. Actualización automática: elegir "Cada hora"

### Paso 5 — Compartir con amigos
Solo mandales la URL `https://TU-URL.vercel.app/calendario.ics`
y ellos repiten el Paso 4. ¡Eso es todo!

## Funcionamiento

- El calendario se actualiza **cada hora**
- Cuando termina un partido, el marcador aparece en el título
- Las rondas eliminatorias muestran los equipos reales cuando se conocen
- Los partidos de Argentina están marcados con 🇦🇷
