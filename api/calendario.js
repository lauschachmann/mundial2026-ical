// Mundial 2026 - Calendario dinamico para iCal
// Horarios en Argentina (GMT-3) → convertidos a UTC

const PARTIDOS_GRUPO = [
  // GRUPO A
  { uid:"g01", fecha:"20260611T190000Z", fin:"20260611T210000Z", local:"Mexico",            visit:"Sudafrica",          grupo:"A", jornada:1, estadio:"Estadio Azteca, Ciudad de Mexico" },
  { uid:"g02", fecha:"20260612T020000Z", fin:"20260612T040000Z", local:"Corea del Sur",     visit:"Republica Checa",    grupo:"A", jornada:1, estadio:"Estadio Akron, Guadalajara" },
  { uid:"g03", fecha:"20260619T010000Z", fin:"20260619T030000Z", local:"Mexico",            visit:"Corea del Sur",      grupo:"A", jornada:2, estadio:"Estadio Akron, Guadalajara" },
  { uid:"g04", fecha:"20260618T160000Z", fin:"20260618T180000Z", local:"Republica Checa",   visit:"Sudafrica",          grupo:"A", jornada:2, estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"g05", fecha:"20260625T010000Z", fin:"20260625T030000Z", local:"Mexico",            visit:"Republica Checa",    grupo:"A", jornada:3, estadio:"Estadio Azteca, Ciudad de Mexico" },
  { uid:"g06", fecha:"20260625T010000Z", fin:"20260625T030000Z", local:"Sudafrica",         visit:"Corea del Sur",      grupo:"A", jornada:3, estadio:"Mercedes-Benz Stadium, Atlanta" },
  // GRUPO B
  { uid:"g07", fecha:"20260612T190000Z", fin:"20260612T210000Z", local:"Canada",            visit:"Bosnia y Herz.",     grupo:"B", jornada:1, estadio:"BMO Field, Toronto" },
  { uid:"g08", fecha:"20260613T190000Z", fin:"20260613T210000Z", local:"Qatar",             visit:"Suiza",              grupo:"B", jornada:1, estadio:"Levis Stadium, San Francisco" },
  { uid:"g09", fecha:"20260618T220000Z", fin:"20260619T000000Z", local:"Canada",            visit:"Qatar",              grupo:"B", jornada:2, estadio:"BC Place, Vancouver" },
  { uid:"g10", fecha:"20260618T190000Z", fin:"20260618T210000Z", local:"Suiza",             visit:"Bosnia y Herz.",     grupo:"B", jornada:2, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g11", fecha:"20260624T190000Z", fin:"20260624T210000Z", local:"Suiza",             visit:"Canada",             grupo:"B", jornada:3, estadio:"BC Place, Vancouver" },
  { uid:"g12", fecha:"20260624T190000Z", fin:"20260624T210000Z", local:"Bosnia y Herz.",    visit:"Qatar",              grupo:"B", jornada:3, estadio:"Levis Stadium, San Francisco" },
  // GRUPO C
  { uid:"g13", fecha:"20260613T220000Z", fin:"20260614T000000Z", local:"Brasil",            visit:"Marruecos",          grupo:"C", jornada:1, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g14", fecha:"20260614T010000Z", fin:"20260614T030000Z", local:"Haiti",             visit:"Escocia",            grupo:"C", jornada:1, estadio:"Gillette Stadium, Boston" },
  { uid:"g15", fecha:"20260619T220000Z", fin:"20260620T000000Z", local:"Escocia",           visit:"Marruecos",          grupo:"C", jornada:2, estadio:"Gillette Stadium, Boston" },
  { uid:"g16", fecha:"20260620T003000Z", fin:"20260620T023000Z", local:"Brasil",            visit:"Haiti",              grupo:"C", jornada:2, estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"g17", fecha:"20260625T190000Z", fin:"20260625T210000Z", local:"Brasil",            visit:"Escocia",            grupo:"C", jornada:3, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g18", fecha:"20260625T190000Z", fin:"20260625T210000Z", local:"Marruecos",         visit:"Haiti",              grupo:"C", jornada:3, estadio:"Gillette Stadium, Boston" },
  // GRUPO D
  { uid:"g19", fecha:"20260613T010000Z", fin:"20260613T030000Z", local:"Estados Unidos",    visit:"Paraguay",           grupo:"D", jornada:1, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g20", fecha:"20260614T040000Z", fin:"20260614T060000Z", local:"Australia",         visit:"Turquia",            grupo:"D", jornada:1, estadio:"BC Place, Vancouver" },
  { uid:"g21", fecha:"20260619T190000Z", fin:"20260619T210000Z", local:"Estados Unidos",    visit:"Australia",          grupo:"D", jornada:2, estadio:"Lumen Field, Seattle" },
  { uid:"g22", fecha:"20260620T030000Z", fin:"20260620T050000Z", local:"Turquia",           visit:"Paraguay",           grupo:"D", jornada:2, estadio:"Levis Stadium, San Francisco" },
  { uid:"g23", fecha:"20260626T010000Z", fin:"20260626T030000Z", local:"Paraguay",          visit:"Australia",          grupo:"D", jornada:3, estadio:"Lumen Field, Seattle" },
  { uid:"g24", fecha:"20260626T010000Z", fin:"20260626T030000Z", local:"Turquia",           visit:"Estados Unidos",     grupo:"D", jornada:3, estadio:"SoFi Stadium, Los Angeles" },
  // GRUPO E
  { uid:"g25", fecha:"20260614T170000Z", fin:"20260614T190000Z", local:"Alemania",          visit:"Curazao",            grupo:"E", jornada:1, estadio:"NRG Stadium, Houston" },
  { uid:"g26", fecha:"20260614T230000Z", fin:"20260615T010000Z", local:"Costa de Marfil",   visit:"Ecuador",            grupo:"E", jornada:1, estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"g27", fecha:"20260620T200000Z", fin:"20260620T220000Z", local:"Alemania",          visit:"Costa de Marfil",    grupo:"E", jornada:2, estadio:"BMO Field, Toronto" },
  { uid:"g28", fecha:"20260621T020000Z", fin:"20260621T040000Z", local:"Ecuador",           visit:"Curazao",            grupo:"E", jornada:2, estadio:"Arrowhead Stadium, Kansas City" },
  { uid:"g29", fecha:"20260626T190000Z", fin:"20260626T210000Z", local:"Alemania",          visit:"Ecuador",            grupo:"E", jornada:3, estadio:"NRG Stadium, Houston" },
  { uid:"g30", fecha:"20260626T190000Z", fin:"20260626T210000Z", local:"Curazao",           visit:"Costa de Marfil",    grupo:"E", jornada:3, estadio:"Lincoln Financial Field, Philadelphia" },
  // GRUPO F
  { uid:"g31", fecha:"20260614T200000Z", fin:"20260614T220000Z", local:"Paises Bajos",      visit:"Japon",              grupo:"F", jornada:1, estadio:"AT&T Stadium, Dallas" },
  { uid:"g32", fecha:"20260615T020000Z", fin:"20260615T040000Z", local:"Suecia",            visit:"Tunez",              grupo:"F", jornada:1, estadio:"Estadio BBVA, Monterrey" },
  { uid:"g33", fecha:"20260620T170000Z", fin:"20260620T190000Z", local:"Paises Bajos",      visit:"Suecia",             grupo:"F", jornada:2, estadio:"NRG Stadium, Houston" },
  { uid:"g34", fecha:"20260621T040000Z", fin:"20260621T060000Z", local:"Tunez",             visit:"Japon",              grupo:"F", jornada:2, estadio:"Estadio BBVA, Monterrey" },
  { uid:"g35", fecha:"20260627T010000Z", fin:"20260627T030000Z", local:"Paises Bajos",      visit:"Tunez",              grupo:"F", jornada:3, estadio:"AT&T Stadium, Dallas" },
  { uid:"g36", fecha:"20260627T010000Z", fin:"20260627T030000Z", local:"Japon",             visit:"Suecia",             grupo:"F", jornada:3, estadio:"Estadio BBVA, Monterrey" },
  // GRUPO G
  { uid:"g37", fecha:"20260615T190000Z", fin:"20260615T210000Z", local:"Belgica",           visit:"Egipto",             grupo:"G", jornada:1, estadio:"Lumen Field, Seattle" },
  { uid:"g38", fecha:"20260616T010000Z", fin:"20260616T030000Z", local:"Iran",              visit:"Nueva Zelanda",      grupo:"G", jornada:1, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g39", fecha:"20260621T190000Z", fin:"20260621T210000Z", local:"Belgica",           visit:"Iran",               grupo:"G", jornada:2, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g40", fecha:"20260622T010000Z", fin:"20260622T030000Z", local:"Nueva Zelanda",     visit:"Egipto",             grupo:"G", jornada:2, estadio:"BC Place, Vancouver" },
  { uid:"g41", fecha:"20260627T190000Z", fin:"20260627T210000Z", local:"Belgica",           visit:"Nueva Zelanda",      grupo:"G", jornada:3, estadio:"Lumen Field, Seattle" },
  { uid:"g42", fecha:"20260627T190000Z", fin:"20260627T210000Z", local:"Egipto",            visit:"Iran",               grupo:"G", jornada:3, estadio:"BC Place, Vancouver" },
  // GRUPO H
  { uid:"g43", fecha:"20260615T160000Z", fin:"20260615T180000Z", local:"Espana",            visit:"Cabo Verde",         grupo:"H", jornada:1, estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"g44", fecha:"20260615T220000Z", fin:"20260616T000000Z", local:"Arabia Saudita",    visit:"Uruguay",            grupo:"H", jornada:1, estadio:"Hard Rock Stadium, Miami" },
  { uid:"g45", fecha:"20260621T160000Z", fin:"20260621T180000Z", local:"Espana",            visit:"Arabia Saudita",     grupo:"H", jornada:2, estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"g46", fecha:"20260621T220000Z", fin:"20260622T000000Z", local:"Uruguay",           visit:"Cabo Verde",         grupo:"H", jornada:2, estadio:"Hard Rock Stadium, Miami" },
  { uid:"g47", fecha:"20260628T010000Z", fin:"20260628T030000Z", local:"Espana",            visit:"Uruguay",            grupo:"H", jornada:3, estadio:"Hard Rock Stadium, Miami" },
  { uid:"g48", fecha:"20260628T010000Z", fin:"20260628T030000Z", local:"Cabo Verde",        visit:"Arabia Saudita",     grupo:"H", jornada:3, estadio:"Mercedes-Benz Stadium, Atlanta" },
  // GRUPO I
  { uid:"g49", fecha:"20260616T190000Z", fin:"20260616T210000Z", local:"Francia",           visit:"Senegal",            grupo:"I", jornada:1, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g50", fecha:"20260616T220000Z", fin:"20260617T000000Z", local:"Irak",              visit:"Noruega",            grupo:"I", jornada:1, estadio:"Gillette Stadium, Boston" },
  { uid:"g51", fecha:"20260622T210000Z", fin:"20260622T230000Z", local:"Francia",           visit:"Irak",               grupo:"I", jornada:2, estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"g52", fecha:"20260623T000000Z", fin:"20260623T020000Z", local:"Noruega",           visit:"Senegal",            grupo:"I", jornada:2, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g53", fecha:"20260628T190000Z", fin:"20260628T210000Z", local:"Francia",           visit:"Noruega",            grupo:"I", jornada:3, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g54", fecha:"20260628T190000Z", fin:"20260628T210000Z", local:"Senegal",           visit:"Irak",               grupo:"I", jornada:3, estadio:"Gillette Stadium, Boston" },
  // GRUPO J - ARGENTINA
  { uid:"g55", fecha:"20260617T010000Z", fin:"20260617T030000Z", local:"Argentina",         visit:"Argelia",            grupo:"J", jornada:1, estadio:"Arrowhead Stadium, Kansas City", esArgentina:true },
  { uid:"g56", fecha:"20260617T040000Z", fin:"20260617T060000Z", local:"Austria",           visit:"Jordania",           grupo:"J", jornada:1, estadio:"Levis Stadium, San Francisco" },
  { uid:"g57", fecha:"20260622T170000Z", fin:"20260622T190000Z", local:"Argentina",         visit:"Austria",            grupo:"J", jornada:2, estadio:"AT&T Stadium, Dallas", esArgentina:true },
  { uid:"g58", fecha:"20260623T030000Z", fin:"20260623T050000Z", local:"Jordania",          visit:"Argelia",            grupo:"J", jornada:2, estadio:"Levis Stadium, San Francisco" },
  { uid:"g59", fecha:"20260626T010000Z", fin:"20260626T030000Z", local:"Argentina",         visit:"Jordania",           grupo:"J", jornada:3, estadio:"Arrowhead Stadium, Kansas City", esArgentina:true },
  { uid:"g60", fecha:"20260626T010000Z", fin:"20260626T030000Z", local:"Argelia",           visit:"Austria",            grupo:"J", jornada:3, estadio:"AT&T Stadium, Dallas" },
  // GRUPO K
  { uid:"g61", fecha:"20260617T170000Z", fin:"20260617T190000Z", local:"Portugal",          visit:"RD Congo",           grupo:"K", jornada:1, estadio:"NRG Stadium, Houston" },
  { uid:"g62", fecha:"20260618T020000Z", fin:"20260618T040000Z", local:"Uzbekistan",        visit:"Colombia",           grupo:"K", jornada:1, estadio:"Estadio Azteca, Ciudad de Mexico" },
  { uid:"g63", fecha:"20260623T170000Z", fin:"20260623T190000Z", local:"Portugal",          visit:"Uzbekistan",         grupo:"K", jornada:2, estadio:"NRG Stadium, Houston" },
  { uid:"g64", fecha:"20260624T020000Z", fin:"20260624T040000Z", local:"Colombia",          visit:"RD Congo",           grupo:"K", jornada:2, estadio:"Estadio Akron, Guadalajara" },
  { uid:"g65", fecha:"20260629T010000Z", fin:"20260629T030000Z", local:"Portugal",          visit:"Colombia",           grupo:"K", jornada:3, estadio:"Estadio Azteca, Ciudad de Mexico" },
  { uid:"g66", fecha:"20260629T010000Z", fin:"20260629T030000Z", local:"RD Congo",          visit:"Uzbekistan",         grupo:"K", jornada:3, estadio:"NRG Stadium, Houston" },
  // GRUPO L
  { uid:"g67", fecha:"20260617T200000Z", fin:"20260617T220000Z", local:"Inglaterra",        visit:"Croacia",            grupo:"L", jornada:1, estadio:"AT&T Stadium, Dallas" },
  { uid:"g68", fecha:"20260617T230000Z", fin:"20260618T010000Z", local:"Ghana",             visit:"Panama",             grupo:"L", jornada:1, estadio:"BMO Field, Toronto" },
  { uid:"g69", fecha:"20260623T200000Z", fin:"20260623T220000Z", local:"Inglaterra",        visit:"Ghana",              grupo:"L", jornada:2, estadio:"Gillette Stadium, Boston" },
  { uid:"g70", fecha:"20260623T230000Z", fin:"20260624T010000Z", local:"Panama",            visit:"Croacia",            grupo:"L", jornada:2, estadio:"BMO Field, Toronto" },
  { uid:"g71", fecha:"20260629T190000Z", fin:"20260629T210000Z", local:"Croacia",           visit:"Ghana",              grupo:"L", jornada:3, estadio:"AT&T Stadium, Dallas" },
  { uid:"g72", fecha:"20260629T190000Z", fin:"20260629T210000Z", local:"Panama",            visit:"Inglaterra",         grupo:"L", jornada:3, estadio:"BMO Field, Toronto" },
];

const ELIMINATORIOS = [
  { uid:"r01", fecha:"20260630T170000Z", fin:"20260630T190000Z", label:"16avos de Final", cruceDesc:"1 A vs 3 BCD",    estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"r02", fecha:"20260630T230000Z", fin:"20260701T010000Z", label:"16avos de Final", cruceDesc:"1 B vs 3 ADE",    estadio:"BC Place, Vancouver" },
  { uid:"r03", fecha:"20260701T170000Z", fin:"20260701T190000Z", label:"16avos de Final", cruceDesc:"1 C vs 3 FGH",    estadio:"Levis Stadium, San Francisco" },
  { uid:"r04", fecha:"20260701T230000Z", fin:"20260702T010000Z", label:"16avos de Final", cruceDesc:"1 D vs 3 IJKL",   estadio:"Hard Rock Stadium, Miami" },
  { uid:"r05", fecha:"20260702T020000Z", fin:"20260702T040000Z", label:"16avos de Final", cruceDesc:"1 E vs 3 ABC",    estadio:"Estadio Azteca, Ciudad de Mexico" },
  { uid:"r06", fecha:"20260702T170000Z", fin:"20260702T190000Z", label:"16avos de Final", cruceDesc:"1 F vs 3 GHI",    estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"r07", fecha:"20260702T230000Z", fin:"20260703T010000Z", label:"16avos de Final", cruceDesc:"1 G vs 3 JKL",    estadio:"NRG Stadium, Houston" },
  { uid:"r08", fecha:"20260703T020000Z", fin:"20260703T040000Z", label:"16avos de Final", cruceDesc:"1 H vs 2 A",      estadio:"BMO Field, Toronto" },
  { uid:"r09", fecha:"20260703T170000Z", fin:"20260703T190000Z", label:"16avos de Final", cruceDesc:"1 I vs 2 B",      estadio:"Gillette Stadium, Boston" },
  { uid:"r10", fecha:"20260703T230000Z", fin:"20260704T010000Z", label:"16avos de Final", cruceDesc:"1 J vs 3 EF",     estadio:"Lumen Field, Seattle" },
  { uid:"r11", fecha:"20260704T020000Z", fin:"20260704T040000Z", label:"16avos de Final", cruceDesc:"2 C vs 2 D",      estadio:"Estadio Akron, Guadalajara" },
  { uid:"r12", fecha:"20260704T170000Z", fin:"20260704T190000Z", label:"16avos de Final", cruceDesc:"2 E vs 2 F",      estadio:"AT&T Stadium, Dallas" },
  { uid:"r13", fecha:"20260704T230000Z", fin:"20260705T010000Z", label:"16avos de Final", cruceDesc:"1 L vs 2 G",      estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"r14", fecha:"20260705T020000Z", fin:"20260705T040000Z", label:"16avos de Final", cruceDesc:"2 H vs 2 I",      estadio:"SoFi Stadium, Los Angeles" },
  { uid:"r15", fecha:"20260705T170000Z", fin:"20260705T190000Z", label:"16avos de Final", cruceDesc:"2 J vs 2 K",      estadio:"NRG Stadium, Houston" },
  { uid:"r16", fecha:"20260705T230000Z", fin:"20260706T010000Z", label:"16avos de Final", cruceDesc:"2 L vs 2 CD",     estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"r17", fecha:"20260706T170000Z", fin:"20260706T190000Z", label:"Octavos de Final", cruceDesc:"W16avo-1 vs W16avo-2", estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"r18", fecha:"20260706T230000Z", fin:"20260707T010000Z", label:"Octavos de Final", cruceDesc:"W16avo-3 vs W16avo-4", estadio:"Arrowhead Stadium, Kansas City" },
  { uid:"r19", fecha:"20260707T170000Z", fin:"20260707T190000Z", label:"Octavos de Final", cruceDesc:"W16avo-5 vs W16avo-6", estadio:"Levis Stadium, San Francisco" },
  { uid:"r20", fecha:"20260707T230000Z", fin:"20260708T010000Z", label:"Octavos de Final", cruceDesc:"W16avo-7 vs W16avo-8", estadio:"Hard Rock Stadium, Miami" },
  { uid:"r21", fecha:"20260708T170000Z", fin:"20260708T190000Z", label:"Octavos de Final", cruceDesc:"W16avo-9 vs W16avo-10", estadio:"BMO Field, Toronto" },
  { uid:"r22", fecha:"20260708T230000Z", fin:"20260709T010000Z", label:"Octavos de Final", cruceDesc:"W16avo-11 vs W16avo-12", estadio:"Estadio BBVA, Monterrey" },
  { uid:"r23", fecha:"20260709T170000Z", fin:"20260709T190000Z", label:"Octavos de Final", cruceDesc:"W16avo-13 vs W16avo-14", estadio:"Gillette Stadium, Boston" },
  { uid:"r24", fecha:"20260709T230000Z", fin:"20260710T010000Z", label:"Octavos de Final", cruceDesc:"W16avo-15 vs W16avo-16", estadio:"BC Place, Vancouver" },
  { uid:"r25", fecha:"20260711T230000Z", fin:"20260712T010000Z", label:"Cuartos de Final", cruceDesc:"WOcta1 vs WOcta2", estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"r26", fecha:"20260712T230000Z", fin:"20260713T010000Z", label:"Cuartos de Final", cruceDesc:"WOcta3 vs WOcta4", estadio:"AT&T Stadium, Dallas" },
  { uid:"r27", fecha:"20260713T190000Z", fin:"20260713T210000Z", label:"Cuartos de Final", cruceDesc:"WOcta5 vs WOcta6", estadio:"Levis Stadium, San Francisco" },
  { uid:"r28", fecha:"20260713T230000Z", fin:"20260714T010000Z", label:"Cuartos de Final", cruceDesc:"WOcta7 vs WOcta8", estadio:"Hard Rock Stadium, Miami" },
  { uid:"r29", fecha:"20260716T230000Z", fin:"20260717T010000Z", label:"SEMIFINAL",       cruceDesc:"WCuarto1 vs WCuarto2", estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"r30", fecha:"20260717T230000Z", fin:"20260718T010000Z", label:"SEMIFINAL",       cruceDesc:"WCuarto3 vs WCuarto4", estadio:"AT&T Stadium, Dallas" },
  { uid:"r31", fecha:"20260718T200000Z", fin:"20260718T220000Z", label:"Tercer Puesto",   cruceDesc:"Perdedor Semi1 vs Perdedor Semi2", estadio:"Hard Rock Stadium, Miami" },
  { uid:"r32", fecha:"20260719T200000Z", fin:"20260719T220000Z", label:"FINAL MUNDIAL 2026", cruceDesc:"WSemi1 vs WSemi2", estadio:"MetLife Stadium, East Rutherford NJ" },
];

function esc(s) {
  return String(s).replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\n/g,'\\n');
}

module.exports = async function(req, res) {
  const lines = [];
  const L = s => lines.push(s);

  L('BEGIN:VCALENDAR');
  L('VERSION:2.0');
  L('PRODID:-//Mundial 2026 Argentina//ES');
  L('CALSCALE:GREGORIAN');
  L('METHOD:PUBLISH');
  L('X-WR-CALNAME:Futbol Mundial 2026 Argentina');
  L('X-WR-CALDESC:Fixture completo del Mundial 2026 - Horarios Argentina GMT-3');
  L('REFRESH-INTERVAL;VALUE=DURATION:PT1H');
  L('X-PUBLISHED-TTL:PT1H');

  // Fase de grupos
  for (const p of PARTIDOS_GRUPO) {
    const esARG = p.esArgentina;
    const emoji = esARG ? '🇦🇷 ARG: ' : '';
    const summary = `${emoji}${p.local} vs ${p.visit} [Grupo ${p.grupo} J${p.jornada}]`;
    L('BEGIN:VEVENT');
    L(`UID:m26-${p.uid}@mundial2026`);
    L(`DTSTART:${p.fecha}`);
    L(`DTEND:${p.fin}`);
    L(`SUMMARY:${esc(summary)}`);
    L(`LOCATION:${esc(p.estadio)}`);
    L(`DESCRIPTION:Grupo ${p.grupo} - Fecha ${p.jornada}\\nEstadio: ${esc(p.estadio)}${esARG ? '\\n\\nVamos Argentina!' : ''}`);
    L('END:VEVENT');
  }

  // Fase eliminatoria
  for (const p of ELIMINATORIOS) {
    const esFinal = p.label.includes('FINAL MUNDIAL');
    const emoji = esFinal ? '🏆 ' : '⚽ ';
    const summary = `${emoji}${p.label}: ${p.cruceDesc}`;
    L('BEGIN:VEVENT');
    L(`UID:m26-${p.uid}@mundial2026`);
    L(`DTSTART:${p.fecha}`);
    L(`DTEND:${p.fin}`);
    L(`SUMMARY:${esc(summary)}`);
    L(`LOCATION:${esc(p.estadio)}`);
    L(`DESCRIPTION:${esc(p.label)}\\nCruce: ${esc(p.cruceDesc)}\\nEstadio: ${esc(p.estadio)}`);
    L('END:VEVENT');
  }

  L('END:VCALENDAR');

  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=3600');
  res.status(200).send(lines.join('\r\n'));
};
