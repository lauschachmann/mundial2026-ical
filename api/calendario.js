// Mundial 2026 - Calendario dinamico para iCal
// Horarios verificados contra fixture oficial ESPN (horario Argentina GMT-3)
// Conversion: hora ARG + 3 = UTC

const PARTIDOS_GRUPO = [
  // JUE 11 JUN
  { uid:"g01", s:"20260611T190000Z", e:"20260611T210000Z", local:"Mexico",           visit:"Sudafrica",        grupo:"A", j:1, estadio:"Estadio Azteca, Ciudad de Mexico" },       // 16:00 ARG
  { uid:"g02", s:"20260612T020000Z", e:"20260612T040000Z", local:"Corea del Sur",    visit:"Rep. Checa",       grupo:"A", j:1, estadio:"Estadio Akron, Guadalajara" },              // 23:00 ARG
  // VIE 12 JUN
  { uid:"g03", s:"20260612T190000Z", e:"20260612T210000Z", local:"Canada",           visit:"Bosnia y Herz.",   grupo:"B", j:1, estadio:"BMO Field, Toronto" },                     // 16:00 ARG
  { uid:"g04", s:"20260613T010000Z", e:"20260613T030000Z", local:"Estados Unidos",   visit:"Paraguay",         grupo:"D", j:1, estadio:"SoFi Stadium, Los Angeles" },              // 22:00 ARG
  // SAB 13 JUN
  { uid:"g05", s:"20260613T190000Z", e:"20260613T210000Z", local:"Qatar",            visit:"Suiza",            grupo:"B", j:1, estadio:"Levis Stadium, San Francisco" },           // 16:00 ARG
  { uid:"g06", s:"20260613T220000Z", e:"20260614T000000Z", local:"Brasil",           visit:"Marruecos",        grupo:"C", j:1, estadio:"MetLife Stadium, Nueva Jersey" },          // 19:00 ARG
  { uid:"g07", s:"20260614T010000Z", e:"20260614T030000Z", local:"Haiti",            visit:"Escocia",          grupo:"C", j:1, estadio:"Gillette Stadium, Boston" },               // 22:00 ARG
  { uid:"g08", s:"20260614T040000Z", e:"20260614T060000Z", local:"Australia",        visit:"Turquia",          grupo:"D", j:1, estadio:"BC Place, Vancouver" },                    // 01:00 ARG dom
  // DOM 14 JUN
  { uid:"g09", s:"20260614T170000Z", e:"20260614T190000Z", local:"Alemania",         visit:"Curazao",          grupo:"E", j:1, estadio:"NRG Stadium, Houston" },                   // 14:00 ARG
  { uid:"g10", s:"20260614T200000Z", e:"20260614T220000Z", local:"Paises Bajos",     visit:"Japon",            grupo:"F", j:1, estadio:"AT&T Stadium, Dallas" },                   // 17:00 ARG
  { uid:"g11", s:"20260614T230000Z", e:"20260615T010000Z", local:"Costa de Marfil",  visit:"Ecuador",          grupo:"E", j:1, estadio:"Lincoln Financial Field, Philadelphia" },  // 20:00 ARG
  { uid:"g12", s:"20260615T020000Z", e:"20260615T040000Z", local:"Suecia",           visit:"Tunez",            grupo:"F", j:1, estadio:"Estadio BBVA, Monterrey" },                // 23:00 ARG
  // LUN 15 JUN
  { uid:"g13", s:"20260615T160000Z", e:"20260615T180000Z", local:"Espana",           visit:"Cabo Verde",       grupo:"H", j:1, estadio:"Mercedes-Benz Stadium, Atlanta" },         // 13:00 ARG
  { uid:"g14", s:"20260615T190000Z", e:"20260615T210000Z", local:"Belgica",          visit:"Egipto",           grupo:"G", j:1, estadio:"Lumen Field, Seattle" },                   // 16:00 ARG
  { uid:"g15", s:"20260615T220000Z", e:"20260616T000000Z", local:"Arabia Saudita",   visit:"Uruguay",          grupo:"H", j:1, estadio:"Hard Rock Stadium, Miami" },               // 19:00 ARG
  { uid:"g16", s:"20260616T010000Z", e:"20260616T030000Z", local:"Iran",             visit:"Nueva Zelanda",    grupo:"G", j:1, estadio:"SoFi Stadium, Los Angeles" },              // 22:00 ARG
  // MAR 16 JUN
  { uid:"g17", s:"20260616T190000Z", e:"20260616T210000Z", local:"Francia",          visit:"Senegal",          grupo:"I", j:1, estadio:"MetLife Stadium, Nueva Jersey" },          // 16:00 ARG
  { uid:"g18", s:"20260616T220000Z", e:"20260617T000000Z", local:"Irak",             visit:"Noruega",          grupo:"I", j:1, estadio:"Gillette Stadium, Boston" },               // 19:00 ARG
  { uid:"g19", s:"20260617T010000Z", e:"20260617T030000Z", local:"Argentina",        visit:"Argelia",          grupo:"J", j:1, estadio:"Arrowhead Stadium, Kansas City", arg:true },// 22:00 ARG
  { uid:"g20", s:"20260617T040000Z", e:"20260617T060000Z", local:"Austria",          visit:"Jordania",         grupo:"J", j:1, estadio:"Levis Stadium, San Francisco" },           // 01:00 ARG mie
  // MIE 17 JUN
  { uid:"g21", s:"20260617T170000Z", e:"20260617T190000Z", local:"Portugal",         visit:"RD Congo",         grupo:"K", j:1, estadio:"NRG Stadium, Houston" },                   // 14:00 ARG
  { uid:"g22", s:"20260617T200000Z", e:"20260617T220000Z", local:"Inglaterra",       visit:"Croacia",          grupo:"L", j:1, estadio:"AT&T Stadium, Dallas" },                   // 17:00 ARG
  { uid:"g23", s:"20260617T230000Z", e:"20260618T010000Z", local:"Ghana",            visit:"Panama",           grupo:"L", j:1, estadio:"BMO Field, Toronto" },                     // 20:00 ARG
  { uid:"g24", s:"20260618T020000Z", e:"20260618T040000Z", local:"Uzbekistan",       visit:"Colombia",         grupo:"K", j:1, estadio:"Estadio Azteca, Ciudad de Mexico" },       // 23:00 ARG
  // JUE 18 JUN
  { uid:"g25", s:"20260618T160000Z", e:"20260618T180000Z", local:"Rep. Checa",       visit:"Sudafrica",        grupo:"A", j:2, estadio:"Mercedes-Benz Stadium, Atlanta" },         // 13:00 ARG
  { uid:"g26", s:"20260618T190000Z", e:"20260618T210000Z", local:"Suiza",            visit:"Bosnia y Herz.",   grupo:"B", j:2, estadio:"SoFi Stadium, Los Angeles" },              // 16:00 ARG
  { uid:"g27", s:"20260618T220000Z", e:"20260619T000000Z", local:"Canada",           visit:"Qatar",            grupo:"B", j:2, estadio:"BC Place, Vancouver" },                    // 19:00 ARG
  { uid:"g28", s:"20260619T010000Z", e:"20260619T030000Z", local:"Mexico",           visit:"Corea del Sur",    grupo:"A", j:2, estadio:"Estadio Akron, Guadalajara" },             // 22:00 ARG
  // VIE 19 JUN
  { uid:"g29", s:"20260619T190000Z", e:"20260619T210000Z", local:"Estados Unidos",   visit:"Australia",        grupo:"D", j:2, estadio:"Lumen Field, Seattle" },                   // 16:00 ARG
  { uid:"g30", s:"20260619T220000Z", e:"20260620T000000Z", local:"Escocia",          visit:"Marruecos",        grupo:"C", j:2, estadio:"Gillette Stadium, Boston" },               // 19:00 ARG
  { uid:"g31", s:"20260620T003000Z", e:"20260620T023000Z", local:"Brasil",           visit:"Haiti",            grupo:"C", j:2, estadio:"Lincoln Financial Field, Philadelphia" },  // 21:30 ARG
  { uid:"g32", s:"20260620T030000Z", e:"20260620T050000Z", local:"Turquia",          visit:"Paraguay",         grupo:"D", j:2, estadio:"Levis Stadium, San Francisco" },           // 00:00 ARG sab
  // SAB 20 JUN
  { uid:"g33", s:"20260620T170000Z", e:"20260620T190000Z", local:"Paises Bajos",     visit:"Suecia",           grupo:"F", j:2, estadio:"NRG Stadium, Houston" },                   // 14:00 ARG
  { uid:"g34", s:"20260620T200000Z", e:"20260620T220000Z", local:"Alemania",         visit:"Costa de Marfil",  grupo:"E", j:2, estadio:"BMO Field, Toronto" },                     // 17:00 ARG
  { uid:"g35", s:"20260621T000000Z", e:"20260621T020000Z", local:"Ecuador",          visit:"Curazao",          grupo:"E", j:2, estadio:"Arrowhead Stadium, Kansas City" },         // 23:00 ARG
  { uid:"g36", s:"20260621T040000Z", e:"20260621T060000Z", local:"Tunez",            visit:"Japon",            grupo:"F", j:2, estadio:"Estadio BBVA, Monterrey" },                // 01:00 ARG dom
  // DOM 21 JUN
  { uid:"g37", s:"20260621T160000Z", e:"20260621T180000Z", local:"Espana",           visit:"Arabia Saudita",   grupo:"H", j:2, estadio:"Mercedes-Benz Stadium, Atlanta" },         // 13:00 ARG
  { uid:"g38", s:"20260621T190000Z", e:"20260621T210000Z", local:"Belgica",          visit:"Iran",             grupo:"G", j:2, estadio:"SoFi Stadium, Los Angeles" },              // 16:00 ARG
  { uid:"g39", s:"20260621T220000Z", e:"20260622T000000Z", local:"Uruguay",          visit:"Cabo Verde",       grupo:"H", j:2, estadio:"Hard Rock Stadium, Miami" },               // 19:00 ARG
  { uid:"g40", s:"20260622T010000Z", e:"20260622T030000Z", local:"Nueva Zelanda",    visit:"Egipto",           grupo:"G", j:2, estadio:"BC Place, Vancouver" },                    // 22:00 ARG
  // LUN 22 JUN
  { uid:"g41", s:"20260622T170000Z", e:"20260622T190000Z", local:"Argentina",        visit:"Austria",          grupo:"J", j:2, estadio:"AT&T Stadium, Dallas", arg:true },         // 14:00 ARG
  { uid:"g42", s:"20260622T210000Z", e:"20260622T230000Z", local:"Francia",          visit:"Irak",             grupo:"I", j:2, estadio:"Lincoln Financial Field, Philadelphia" },  // 18:00 ARG
  { uid:"g43", s:"20260623T000000Z", e:"20260623T020000Z", local:"Noruega",          visit:"Senegal",          grupo:"I", j:2, estadio:"MetLife Stadium, Nueva Jersey" },          // 21:00 ARG
  { uid:"g44", s:"20260623T030000Z", e:"20260623T050000Z", local:"Jordania",         visit:"Argelia",          grupo:"J", j:2, estadio:"Levis Stadium, San Francisco" },           // 00:00 ARG mar
  // MAR 23 JUN
  { uid:"g45", s:"20260623T170000Z", e:"20260623T190000Z", local:"Portugal",         visit:"Uzbekistan",       grupo:"K", j:2, estadio:"NRG Stadium, Houston" },                   // 14:00 ARG
  { uid:"g46", s:"20260623T200000Z", e:"20260623T220000Z", local:"Inglaterra",       visit:"Ghana",            grupo:"L", j:2, estadio:"Gillette Stadium, Boston" },               // 17:00 ARG
  { uid:"g47", s:"20260623T230000Z", e:"20260624T010000Z", local:"Panama",           visit:"Croacia",          grupo:"L", j:2, estadio:"BMO Field, Toronto" },                     // 20:00 ARG
  { uid:"g48", s:"20260624T020000Z", e:"20260624T040000Z", local:"Colombia",         visit:"RD Congo",         grupo:"K", j:2, estadio:"Estadio Akron, Guadalajara" },             // 23:00 ARG
  // MIE 24 JUN
  { uid:"g49", s:"20260624T190000Z", e:"20260624T210000Z", local:"Suiza",            visit:"Canada",           grupo:"B", j:3, estadio:"BC Place, Vancouver" },                    // 16:00 ARG
  { uid:"g50", s:"20260624T190000Z", e:"20260624T210000Z", local:"Bosnia y Herz.",   visit:"Qatar",            grupo:"B", j:3, estadio:"Lumen Field, Seattle" },                   // 16:00 ARG
  { uid:"g51", s:"20260624T220000Z", e:"20260625T000000Z", local:"Marruecos",        visit:"Haiti",            grupo:"C", j:3, estadio:"Mercedes-Benz Stadium, Atlanta" },         // 19:00 ARG
  { uid:"g52", s:"20260624T220000Z", e:"20260625T000000Z", local:"Brasil",           visit:"Escocia",          grupo:"C", j:3, estadio:"Hard Rock Stadium, Miami" },               // 19:00 ARG
  { uid:"g53", s:"20260625T010000Z", e:"20260625T030000Z", local:"Sudafrica",        visit:"Corea del Sur",    grupo:"A", j:3, estadio:"Estadio BBVA, Monterrey" },                // 22:00 ARG
  { uid:"g54", s:"20260625T010000Z", e:"20260625T030000Z", local:"Rep. Checa",       visit:"Mexico",           grupo:"A", j:3, estadio:"Estadio Azteca, Ciudad de Mexico" },       // 22:00 ARG
  // JUE 25 JUN
  { uid:"g55", s:"20260625T200000Z", e:"20260625T220000Z", local:"Curazao",          visit:"Costa de Marfil",  grupo:"E", j:3, estadio:"Lincoln Financial Field, Philadelphia" },  // 17:00 ARG
  { uid:"g56", s:"20260625T200000Z", e:"20260625T220000Z", local:"Ecuador",          visit:"Alemania",         grupo:"E", j:3, estadio:"MetLife Stadium, Nueva Jersey" },          // 17:00 ARG
  { uid:"g57", s:"20260625T230000Z", e:"20260626T010000Z", local:"Japon",            visit:"Suecia",           grupo:"F", j:3, estadio:"AT&T Stadium, Dallas" },                   // 20:00 ARG
  { uid:"g58", s:"20260625T230000Z", e:"20260626T010000Z", local:"Tunez",            visit:"Paises Bajos",     grupo:"F", j:3, estadio:"Arrowhead Stadium, Kansas City" },         // 20:00 ARG
  { uid:"g59", s:"20260626T020000Z", e:"20260626T040000Z", local:"Paraguay",         visit:"Australia",        grupo:"D", j:3, estadio:"Levis Stadium, San Francisco" },           // 23:00 ARG
  { uid:"g60", s:"20260626T020000Z", e:"20260626T040000Z", local:"Turquia",          visit:"Estados Unidos",   grupo:"D", j:3, estadio:"SoFi Stadium, Los Angeles" },              // 23:00 ARG
  // VIE 26 JUN
  { uid:"g61", s:"20260626T190000Z", e:"20260626T210000Z", local:"Noruega",          visit:"Francia",          grupo:"I", j:3, estadio:"Gillette Stadium, Boston" },               // 16:00 ARG
  { uid:"g62", s:"20260626T190000Z", e:"20260626T210000Z", local:"Senegal",          visit:"Irak",             grupo:"I", j:3, estadio:"BMO Field, Toronto" },                     // 16:00 ARG
  { uid:"g63", s:"20260627T000000Z", e:"20260627T020000Z", local:"Cabo Verde",       visit:"Arabia Saudita",   grupo:"H", j:3, estadio:"NRG Stadium, Houston" },                   // 21:00 ARG
  { uid:"g64", s:"20260627T000000Z", e:"20260627T020000Z", local:"Uruguay",          visit:"Espana",           grupo:"H", j:3, estadio:"Estadio Akron, Guadalajara" },             // 21:00 ARG
  { uid:"g65", s:"20260627T030000Z", e:"20260627T050000Z", local:"Egipto",           visit:"Iran",             grupo:"G", j:3, estadio:"Lumen Field, Seattle" },                   // 00:00 ARG sab
  { uid:"g66", s:"20260627T030000Z", e:"20260627T050000Z", local:"Nueva Zelanda",    visit:"Belgica",          grupo:"G", j:3, estadio:"BC Place, Vancouver" },                    // 00:00 ARG sab
  // SAB 27 JUN
  { uid:"g67", s:"20260627T210000Z", e:"20260627T230000Z", local:"Croacia",          visit:"Ghana",            grupo:"L", j:3, estadio:"Lincoln Financial Field, Philadelphia" },  // 18:00 ARG
  { uid:"g68", s:"20260627T210000Z", e:"20260627T230000Z", local:"Panama",           visit:"Inglaterra",       grupo:"L", j:3, estadio:"MetLife Stadium, Nueva Jersey" },          // 18:00 ARG
  { uid:"g69", s:"20260627T233000Z", e:"20260628T013000Z", local:"Colombia",         visit:"Portugal",         grupo:"K", j:3, estadio:"Hard Rock Stadium, Miami" },               // 20:30 ARG
  { uid:"g70", s:"20260627T233000Z", e:"20260628T013000Z", local:"RD Congo",         visit:"Uzbekistan",       grupo:"K", j:3, estadio:"Mercedes-Benz Stadium, Atlanta" },         // 20:30 ARG
  { uid:"g71", s:"20260628T020000Z", e:"20260628T040000Z", local:"Argelia",          visit:"Austria",          grupo:"J", j:3, estadio:"Arrowhead Stadium, Kansas City" },         // 23:00 ARG
  { uid:"g72", s:"20260628T020000Z", e:"20260628T040000Z", local:"Jordania",         visit:"Argentina",        grupo:"J", j:3, estadio:"AT&T Stadium, Dallas", arg:true },         // 23:00 ARG
];

const ELIMINATORIOS = [
  { uid:"r01", s:"20260628T190000Z", e:"20260628T210000Z", label:"16avos", desc:"2A vs 2B",       estadio:"SoFi Stadium, Los Angeles" },           // 16:00 ARG
  { uid:"r02", s:"20260629T160000Z", e:"20260629T180000Z", label:"16avos", desc:"1E vs 3ABCDF",   estadio:"NRG Stadium, Houston" },                 // 13:00 ARG
  { uid:"r03", s:"20260629T193000Z", e:"20260629T213000Z", label:"16avos", desc:"1F vs 2C",       estadio:"Estadio BBVA, Monterrey" },              // 16:30 ARG
  { uid:"r04", s:"20260630T000000Z", e:"20260630T020000Z", label:"16avos", desc:"1E vs 2F",       estadio:"NRG Stadium, Houston" },                 // 21:00 ARG
  { uid:"r05", s:"20260630T160000Z", e:"20260630T180000Z", label:"16avos", desc:"1I vs 3CDFGH",   estadio:"MetLife Stadium, Nueva Jersey" },        // 13:00 ARG
  { uid:"r06", s:"20260630T190000Z", e:"20260630T210000Z", label:"16avos", desc:"2E vs 2I",       estadio:"AT&T Stadium, Dallas" },                 // 16:00 ARG
  { uid:"r07", s:"20260701T000000Z", e:"20260701T020000Z", label:"16avos", desc:"1A vs 3CEFHI",   estadio:"Estadio Azteca, Ciudad de Mexico" },     // 21:00 ARG
  { uid:"r08", s:"20260701T140000Z", e:"20260701T160000Z", label:"16avos", desc:"1L vs 3EHIJK",   estadio:"Mercedes-Benz Stadium, Atlanta" },       // 11:00 ARG
  { uid:"r09", s:"20260701T170000Z", e:"20260701T190000Z", label:"16avos", desc:"1D vs 3BEFIJ",   estadio:"Levis Stadium, San Francisco" },         // 14:00 ARG
  { uid:"r10", s:"20260701T200000Z", e:"20260701T220000Z", label:"16avos", desc:"1G vs 3AEHIJ",   estadio:"Lumen Field, Seattle" },                 // 17:00 ARG
  { uid:"r11", s:"20260702T160000Z", e:"20260702T180000Z", label:"16avos", desc:"2K vs 2L",       estadio:"BMO Field, Toronto" },                   // 13:00 ARG
  { uid:"r12", s:"20260702T190000Z", e:"20260702T210000Z", label:"16avos", desc:"1H vs 2J",       estadio:"SoFi Stadium, Los Angeles" },            // 16:00 ARG
  { uid:"r13", s:"20260702T220000Z", e:"20260703T000000Z", label:"16avos", desc:"1B vs 3EFGIJ",   estadio:"BC Place, Vancouver" },                  // 19:00 ARG
  { uid:"r14", s:"20260703T170000Z", e:"20260703T190000Z", label:"16avos", desc:"1J vs 2H",       estadio:"Hard Rock Stadium, Miami" },             // 14:00 ARG
  { uid:"r15", s:"20260703T200000Z", e:"20260703T220000Z", label:"16avos", desc:"1K vs 3DEIJL",   estadio:"Arrowhead Stadium, Kansas City" },       // 17:00 ARG
  { uid:"r16", s:"20260703T233000Z", e:"20260704T013000Z", label:"16avos", desc:"2D vs 2G",       estadio:"AT&T Stadium, Dallas" },                 // 20:30 ARG
  { uid:"r17", s:"20260704T160000Z", e:"20260704T180000Z", label:"Octavos", desc:"W74 vs W77",    estadio:"Lincoln Financial Field, Philadelphia" },// 13:00 ARG
  { uid:"r18", s:"20260704T190000Z", e:"20260704T210000Z", label:"Octavos", desc:"W73 vs W75",    estadio:"NRG Stadium, Houston" },                 // 16:00 ARG
  { uid:"r19", s:"20260705T160000Z", e:"20260705T180000Z", label:"Octavos", desc:"W76 vs W78",    estadio:"MetLife Stadium, Nueva Jersey" },        // 13:00 ARG
  { uid:"r20", s:"20260705T190000Z", e:"20260705T210000Z", label:"Octavos", desc:"W79 vs W80",    estadio:"Estadio Azteca, Ciudad de Mexico" },     // 16:00 ARG
  { uid:"r21", s:"20260706T160000Z", e:"20260706T180000Z", label:"Octavos", desc:"W83 vs W84",    estadio:"AT&T Stadium, Dallas" },                 // 13:00 ARG
  { uid:"r22", s:"20260706T190000Z", e:"20260706T210000Z", label:"Octavos", desc:"W81 vs W82",    estadio:"Lumen Field, Seattle" },                 // 16:00 ARG
  { uid:"r23", s:"20260707T160000Z", e:"20260707T180000Z", label:"Octavos", desc:"W86 vs W88",    estadio:"Mercedes-Benz Stadium, Atlanta" },       // 13:00 ARG
  { uid:"r24", s:"20260707T190000Z", e:"20260707T210000Z", label:"Octavos", desc:"W85 vs W87",    estadio:"BC Place, Vancouver" },                  // 16:00 ARG
  { uid:"r25", s:"20260709T200000Z", e:"20260709T220000Z", label:"Cuartos", desc:"W89 vs W90",    estadio:"Gillette Stadium, Boston" },             // 17:00 ARG
  { uid:"r26", s:"20260710T200000Z", e:"20260710T220000Z", label:"Cuartos", desc:"W93 vs W94",    estadio:"SoFi Stadium, Los Angeles" },            // 17:00 ARG
  { uid:"r27", s:"20260711T190000Z", e:"20260711T210000Z", label:"Cuartos", desc:"W91 vs W92",    estadio:"Hard Rock Stadium, Miami" },             // 16:00 ARG
  { uid:"r28", s:"20260711T200000Z", e:"20260711T220000Z", label:"Cuartos", desc:"W95 vs W96",    estadio:"Arrowhead Stadium, Kansas City" },       // 17:00 ARG
  { uid:"r29", s:"20260714T200000Z", e:"20260714T220000Z", label:"SEMIFINAL", desc:"W97 vs W98",  estadio:"AT&T Stadium, Dallas" },                 // 17:00 ARG
  { uid:"r30", s:"20260715T190000Z", e:"20260715T210000Z", label:"SEMIFINAL", desc:"W99 vs W100", estadio:"Mercedes-Benz Stadium, Atlanta" },       // 16:00 ARG
  { uid:"r31", s:"20260718T200000Z", e:"20260718T220000Z", label:"Tercer Puesto", desc:"Perdedor Semi1 vs Perdedor Semi2", estadio:"Hard Rock Stadium, Miami" }, // 17:00 ARG
  { uid:"r32", s:"20260719T200000Z", e:"20260719T220000Z", label:"FINAL MUNDIAL 2026", desc:"Campeones Semi1 vs Semi2", estadio:"MetLife Stadium, Nueva Jersey" }, // 17:00 ARG
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
  L('X-WR-CALNAME:Futbol Mundial 2026 - Arg');
  L('X-WR-CALDESC:Fixture completo del Mundial 2026 con horarios para Argentina (GMT-3).');
  L('REFRESH-INTERVAL;VALUE=DURATION:PT1H');
  L('X-PUBLISHED-TTL:PT1H');

  for (const p of PARTIDOS_GRUPO) {
    const prefix = p.arg ? '🇦🇷 ARG: ' : '⚽ ';
    const summary = `${prefix}${p.local} vs ${p.visit} [Gr.${p.grupo} J${p.j}]`;
    L('BEGIN:VEVENT');
    L(`UID:m26-${p.uid}@mundial2026ical`);
    L(`DTSTART:${p.s}`);
    L(`DTEND:${p.e}`);
    L(`SUMMARY:${esc(summary)}`);
    L(`LOCATION:${esc(p.estadio)}`);
    L(`DESCRIPTION:Grupo ${p.grupo} - Fecha ${p.j}\\nEstadio: ${esc(p.estadio)}${p.arg ? '\\n\\nVamos Argentina!' : ''}`);
    L('END:VEVENT');
  }

  for (const p of ELIMINATORIOS) {
    const esFinal = p.label.includes('FINAL MUNDIAL');
    const isSemi = p.label.includes('SEMIFINAL');
    const emoji = esFinal ? '🏆 ' : isSemi ? '🔥 ' : '⚽ ';
    L('BEGIN:VEVENT');
    L(`UID:m26-${p.uid}@mundial2026ical`);
    L(`DTSTART:${p.s}`);
    L(`DTEND:${p.e}`);
    L(`SUMMARY:${esc(`${emoji}${p.label}: ${p.desc}`)}`);
    L(`LOCATION:${esc(p.estadio)}`);
    L(`DESCRIPTION:${esc(p.label)}\\nCruce: ${esc(p.desc)}\\nEstadio: ${esc(p.estadio)}`);
    L('END:VEVENT');
  }

  L('END:VCALENDAR');

  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.status(200).send(lines.join('\r\n'));
};
