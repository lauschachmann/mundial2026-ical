// Mundial 2026 - Calendario dinamico para iCal
// Horarios en hora Argentina (America/Argentina/Buenos_Aires)
// Fuente: FIFA oficial (hora sede +1 = hora ARG) - verificado 30 jun 2026

const TZ = "America/Argentina/Buenos_Aires";

const PARTIDOS_GRUPO = [
  { uid:"g01", s:"20260611T160000", e:"20260611T180000", local:"Mexico",           visit:"Sudafrica",        grupo:"A", j:1, estadio:"Estadio Azteca, Ciudad de Mexico" },
  { uid:"g02", s:"20260611T230000", e:"20260612T010000", local:"Corea del Sur",    visit:"Rep. Checa",       grupo:"A", j:1, estadio:"Estadio Akron, Guadalajara" },
  { uid:"g03", s:"20260612T160000", e:"20260612T180000", local:"Canada",           visit:"Bosnia y Herz.",   grupo:"B", j:1, estadio:"BMO Field, Toronto" },
  { uid:"g04", s:"20260612T220000", e:"20260613T000000", local:"Estados Unidos",   visit:"Paraguay",         grupo:"D", j:1, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g05", s:"20260613T160000", e:"20260613T180000", local:"Qatar",            visit:"Suiza",            grupo:"B", j:1, estadio:"Levis Stadium, San Francisco" },
  { uid:"g06", s:"20260613T190000", e:"20260613T210000", local:"Brasil",           visit:"Marruecos",        grupo:"C", j:1, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g07", s:"20260613T220000", e:"20260614T000000", local:"Haiti",            visit:"Escocia",          grupo:"C", j:1, estadio:"Gillette Stadium, Boston" },
  { uid:"g08", s:"20260614T010000", e:"20260614T030000", local:"Australia",        visit:"Turquia",          grupo:"D", j:1, estadio:"BC Place, Vancouver" },
  { uid:"g09", s:"20260614T140000", e:"20260614T160000", local:"Alemania",         visit:"Curazao",          grupo:"E", j:1, estadio:"NRG Stadium, Houston" },
  { uid:"g10", s:"20260614T170000", e:"20260614T190000", local:"Paises Bajos",     visit:"Japon",            grupo:"F", j:1, estadio:"AT&T Stadium, Dallas" },
  { uid:"g11", s:"20260614T200000", e:"20260614T220000", local:"Costa de Marfil",  visit:"Ecuador",          grupo:"E", j:1, estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"g12", s:"20260614T230000", e:"20260615T010000", local:"Suecia",           visit:"Tunez",            grupo:"F", j:1, estadio:"Estadio BBVA, Monterrey" },
  { uid:"g13", s:"20260615T130000", e:"20260615T150000", local:"Espana",           visit:"Cabo Verde",       grupo:"H", j:1, estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"g14", s:"20260615T160000", e:"20260615T180000", local:"Belgica",          visit:"Egipto",           grupo:"G", j:1, estadio:"Lumen Field, Seattle" },
  { uid:"g15", s:"20260615T190000", e:"20260615T210000", local:"Arabia Saudita",   visit:"Uruguay",          grupo:"H", j:1, estadio:"Hard Rock Stadium, Miami" },
  { uid:"g16", s:"20260615T220000", e:"20260616T000000", local:"Iran",             visit:"Nueva Zelanda",    grupo:"G", j:1, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g17", s:"20260616T160000", e:"20260616T180000", local:"Francia",          visit:"Senegal",          grupo:"I", j:1, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g18", s:"20260616T190000", e:"20260616T210000", local:"Irak",             visit:"Noruega",          grupo:"I", j:1, estadio:"Gillette Stadium, Boston" },
  { uid:"g19", s:"20260616T220000", e:"20260617T000000", local:"Argentina",        visit:"Argelia",          grupo:"J", j:1, estadio:"Arrowhead Stadium, Kansas City", arg:true },
  { uid:"g20", s:"20260617T010000", e:"20260617T030000", local:"Austria",          visit:"Jordania",         grupo:"J", j:1, estadio:"Levis Stadium, San Francisco" },
  { uid:"g21", s:"20260617T140000", e:"20260617T160000", local:"Portugal",         visit:"RD Congo",         grupo:"K", j:1, estadio:"NRG Stadium, Houston" },
  { uid:"g22", s:"20260617T170000", e:"20260617T190000", local:"Inglaterra",       visit:"Croacia",          grupo:"L", j:1, estadio:"AT&T Stadium, Dallas" },
  { uid:"g23", s:"20260617T200000", e:"20260617T220000", local:"Ghana",            visit:"Panama",           grupo:"L", j:1, estadio:"BMO Field, Toronto" },
  { uid:"g24", s:"20260617T230000", e:"20260618T010000", local:"Uzbekistan",       visit:"Colombia",         grupo:"K", j:1, estadio:"Estadio Azteca, Ciudad de Mexico" },
  { uid:"g25", s:"20260618T130000", e:"20260618T150000", local:"Rep. Checa",       visit:"Sudafrica",        grupo:"A", j:2, estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"g26", s:"20260618T160000", e:"20260618T180000", local:"Suiza",            visit:"Bosnia y Herz.",   grupo:"B", j:2, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g27", s:"20260618T190000", e:"20260618T210000", local:"Canada",           visit:"Qatar",            grupo:"B", j:2, estadio:"BC Place, Vancouver" },
  { uid:"g28", s:"20260618T220000", e:"20260619T000000", local:"Mexico",           visit:"Corea del Sur",    grupo:"A", j:2, estadio:"Estadio Akron, Guadalajara" },
  { uid:"g29", s:"20260619T160000", e:"20260619T180000", local:"Estados Unidos",   visit:"Australia",        grupo:"D", j:2, estadio:"Lumen Field, Seattle" },
  { uid:"g30", s:"20260619T190000", e:"20260619T210000", local:"Escocia",          visit:"Marruecos",        grupo:"C", j:2, estadio:"Gillette Stadium, Boston" },
  { uid:"g31", s:"20260619T213000", e:"20260619T233000", local:"Brasil",           visit:"Haiti",            grupo:"C", j:2, estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"g32", s:"20260620T000000", e:"20260620T020000", local:"Turquia",          visit:"Paraguay",         grupo:"D", j:2, estadio:"Levis Stadium, San Francisco" },
  { uid:"g33", s:"20260620T140000", e:"20260620T160000", local:"Paises Bajos",     visit:"Suecia",           grupo:"F", j:2, estadio:"NRG Stadium, Houston" },
  { uid:"g34", s:"20260620T170000", e:"20260620T190000", local:"Alemania",         visit:"Costa de Marfil",  grupo:"E", j:2, estadio:"BMO Field, Toronto" },
  { uid:"g35", s:"20260620T210000", e:"20260620T230000", local:"Ecuador",          visit:"Curazao",          grupo:"E", j:2, estadio:"Arrowhead Stadium, Kansas City" },
  { uid:"g36", s:"20260621T010000", e:"20260621T030000", local:"Tunez",            visit:"Japon",            grupo:"F", j:2, estadio:"Estadio BBVA, Monterrey" },
  { uid:"g37", s:"20260621T130000", e:"20260621T150000", local:"Espana",           visit:"Arabia Saudita",   grupo:"H", j:2, estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"g38", s:"20260621T160000", e:"20260621T180000", local:"Belgica",          visit:"Iran",             grupo:"G", j:2, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g39", s:"20260621T190000", e:"20260621T210000", local:"Uruguay",          visit:"Cabo Verde",       grupo:"H", j:2, estadio:"Hard Rock Stadium, Miami" },
  { uid:"g40", s:"20260621T220000", e:"20260622T000000", local:"Nueva Zelanda",    visit:"Egipto",           grupo:"G", j:2, estadio:"BC Place, Vancouver" },
  { uid:"g41", s:"20260622T140000", e:"20260622T160000", local:"Argentina",        visit:"Austria",          grupo:"J", j:2, estadio:"AT&T Stadium, Dallas", arg:true },
  { uid:"g42", s:"20260622T180000", e:"20260622T200000", local:"Francia",          visit:"Irak",             grupo:"I", j:2, estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"g43", s:"20260622T210000", e:"20260622T230000", local:"Noruega",          visit:"Senegal",          grupo:"I", j:2, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g44", s:"20260623T000000", e:"20260623T020000", local:"Jordania",         visit:"Argelia",          grupo:"J", j:2, estadio:"Levis Stadium, San Francisco" },
  { uid:"g45", s:"20260623T140000", e:"20260623T160000", local:"Portugal",         visit:"Uzbekistan",       grupo:"K", j:2, estadio:"NRG Stadium, Houston" },
  { uid:"g46", s:"20260623T170000", e:"20260623T190000", local:"Inglaterra",       visit:"Ghana",            grupo:"L", j:2, estadio:"Gillette Stadium, Boston" },
  { uid:"g47", s:"20260623T200000", e:"20260623T220000", local:"Panama",           visit:"Croacia",          grupo:"L", j:2, estadio:"BMO Field, Toronto" },
  { uid:"g48", s:"20260623T230000", e:"20260624T010000", local:"Colombia",         visit:"RD Congo",         grupo:"K", j:2, estadio:"Estadio Akron, Guadalajara" },
  { uid:"g49", s:"20260624T160000", e:"20260624T180000", local:"Suiza",            visit:"Canada",           grupo:"B", j:3, estadio:"BC Place, Vancouver" },
  { uid:"g50", s:"20260624T160000", e:"20260624T180000", local:"Bosnia y Herz.",   visit:"Qatar",            grupo:"B", j:3, estadio:"Lumen Field, Seattle" },
  { uid:"g51", s:"20260624T190000", e:"20260624T210000", local:"Marruecos",        visit:"Haiti",            grupo:"C", j:3, estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"g52", s:"20260624T190000", e:"20260624T210000", local:"Brasil",           visit:"Escocia",          grupo:"C", j:3, estadio:"Hard Rock Stadium, Miami" },
  { uid:"g53", s:"20260624T220000", e:"20260625T000000", local:"Sudafrica",        visit:"Corea del Sur",    grupo:"A", j:3, estadio:"Estadio BBVA, Monterrey" },
  { uid:"g54", s:"20260624T220000", e:"20260625T000000", local:"Rep. Checa",       visit:"Mexico",           grupo:"A", j:3, estadio:"Estadio Azteca, Ciudad de Mexico" },
  { uid:"g55", s:"20260625T170000", e:"20260625T190000", local:"Curazao",          visit:"Costa de Marfil",  grupo:"E", j:3, estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"g56", s:"20260625T170000", e:"20260625T190000", local:"Ecuador",          visit:"Alemania",         grupo:"E", j:3, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g57", s:"20260625T200000", e:"20260625T220000", local:"Japon",            visit:"Suecia",           grupo:"F", j:3, estadio:"AT&T Stadium, Dallas" },
  { uid:"g58", s:"20260625T200000", e:"20260625T220000", local:"Tunez",            visit:"Paises Bajos",     grupo:"F", j:3, estadio:"Arrowhead Stadium, Kansas City" },
  { uid:"g59", s:"20260625T230000", e:"20260626T010000", local:"Paraguay",         visit:"Australia",        grupo:"D", j:3, estadio:"Levis Stadium, San Francisco" },
  { uid:"g60", s:"20260625T230000", e:"20260626T010000", local:"Turquia",          visit:"Estados Unidos",   grupo:"D", j:3, estadio:"SoFi Stadium, Los Angeles" },
  { uid:"g61", s:"20260626T160000", e:"20260626T180000", local:"Noruega",          visit:"Francia",          grupo:"I", j:3, estadio:"Gillette Stadium, Boston" },
  { uid:"g62", s:"20260626T160000", e:"20260626T180000", local:"Senegal",          visit:"Irak",             grupo:"I", j:3, estadio:"BMO Field, Toronto" },
  { uid:"g63", s:"20260626T210000", e:"20260626T230000", local:"Cabo Verde",       visit:"Arabia Saudita",   grupo:"H", j:3, estadio:"NRG Stadium, Houston" },
  { uid:"g64", s:"20260626T210000", e:"20260626T230000", local:"Uruguay",          visit:"Espana",           grupo:"H", j:3, estadio:"Estadio Akron, Guadalajara" },
  { uid:"g65", s:"20260627T000000", e:"20260627T020000", local:"Egipto",           visit:"Iran",             grupo:"G", j:3, estadio:"Lumen Field, Seattle" },
  { uid:"g66", s:"20260627T000000", e:"20260627T020000", local:"Nueva Zelanda",    visit:"Belgica",          grupo:"G", j:3, estadio:"BC Place, Vancouver" },
  { uid:"g67", s:"20260627T180000", e:"20260627T200000", local:"Croacia",          visit:"Ghana",            grupo:"L", j:3, estadio:"Lincoln Financial Field, Philadelphia" },
  { uid:"g68", s:"20260627T180000", e:"20260627T200000", local:"Panama",           visit:"Inglaterra",       grupo:"L", j:3, estadio:"MetLife Stadium, Nueva Jersey" },
  { uid:"g69", s:"20260627T203000", e:"20260627T223000", local:"Colombia",         visit:"Portugal",         grupo:"K", j:3, estadio:"Hard Rock Stadium, Miami" },
  { uid:"g70", s:"20260627T203000", e:"20260627T223000", local:"RD Congo",         visit:"Uzbekistan",       grupo:"K", j:3, estadio:"Mercedes-Benz Stadium, Atlanta" },
  { uid:"g71", s:"20260627T230000", e:"20260628T010000", local:"Argelia",          visit:"Austria",          grupo:"J", j:3, estadio:"Arrowhead Stadium, Kansas City" },
  { uid:"g72", s:"20260627T230000", e:"20260628T010000", local:"Jordania",         visit:"Argentina",        grupo:"J", j:3, estadio:"AT&T Stadium, Dallas", arg:true },
];

// Fase eliminatoria - fuente FIFA oficial (hora sede +1 = hora ARG)
const ELIMINATORIOS = [
  // 16avos
  { uid:"r01", s:"20260628T160000", e:"20260628T180000", label:"16avos", desc:"Sudafrica vs Canada",             estadio:"SoFi Stadium, Los Angeles" },           // dom 28/6 16:00
  { uid:"r02", s:"20260629T140000", e:"20260629T160000", label:"16avos", desc:"Brasil vs Japon",                  estadio:"NRG Stadium, Houston" },                // lun 29/6 14:00
  { uid:"r03", s:"20260629T173000", e:"20260629T193000", label:"16avos", desc:"Alemania vs Paraguay",             estadio:"Gillette Stadium, Boston" },            // lun 29/6 17:30
  { uid:"r04", s:"20260629T220000", e:"20260630T000000", label:"16avos", desc:"Paises Bajos vs Marruecos",        estadio:"Estadio BBVA, Monterrey" },             // lun 29/6 22:00
  { uid:"r05", s:"20260630T140000", e:"20260630T160000", label:"16avos", desc:"Costa de Marfil vs Noruega",       estadio:"AT&T Stadium, Dallas" },                // mar 30/6 14:00
  { uid:"r06", s:"20260630T180000", e:"20260630T200000", label:"16avos", desc:"Francia vs Suecia",                estadio:"MetLife Stadium, Nueva Jersey" },       // mar 30/6 18:00
  { uid:"r07", s:"20260630T220000", e:"20260701T000000", label:"16avos", desc:"Mexico vs Ecuador",                estadio:"Estadio Azteca, Ciudad de Mexico" },    // mar 30/6 22:00
  { uid:"r08", s:"20260701T130000", e:"20260701T150000", label:"16avos", desc:"Inglaterra vs RD Congo",           estadio:"Mercedes-Benz Stadium, Atlanta" },      // mie 1/7 13:00
  { uid:"r09", s:"20260701T170000", e:"20260701T190000", label:"16avos", desc:"Belgica vs Senegal",               estadio:"Lumen Field, Seattle" },                // mie 1/7 17:00
  { uid:"r10", s:"20260701T210000", e:"20260701T230000", label:"16avos", desc:"Estados Unidos vs Bosnia y Herz.", estadio:"Levis Stadium, San Francisco" },        // mie 1/7 21:00
  { uid:"r11", s:"20260702T200000", e:"20260702T220000", label:"16avos", desc:"Portugal vs Croacia",              estadio:"BMO Field, Toronto" },                  // jue 2/7 20:00
  { uid:"r12", s:"20260702T160000", e:"20260702T180000", label:"16avos", desc:"Espana vs Austria",                estadio:"SoFi Stadium, Los Angeles" },           // jue 2/7 16:00
  { uid:"r13", s:"20260703T000000", e:"20260703T020000", label:"16avos", desc:"Suiza vs Argelia",                 estadio:"BC Place, Vancouver" },                 // jue 2/7 24:00 (= 3/7 00:00)
  { uid:"r14", s:"20260703T150000", e:"20260703T170000", label:"16avos", desc:"Australia vs Egipto",              estadio:"AT&T Stadium, Dallas" },                // vie 3/7 15:00
  { uid:"r15", s:"20260703T190000", e:"20260703T210000", label:"16avos", desc:"🇦🇷 ARG: Argentina vs Cabo Verde", estadio:"Hard Rock Stadium, Miami", arg:true },  // vie 3/7 19:00
  { uid:"r16", s:"20260703T223000", e:"20260704T003000", label:"16avos", desc:"Colombia vs Ghana",                estadio:"Arrowhead Stadium, Kansas City" },      // vie 3/7 22:30
  // Octavos (fuente FIFA oficial)
  { uid:"r17", s:"20260704T180000", e:"20260704T200000", label:"Octavos", desc:"Paraguay vs W Francia/Suecia",            estadio:"Lincoln Financial Field, Philadelphia" }, // sab 4/7 18:00
  { uid:"r18", s:"20260704T140000", e:"20260704T160000", label:"Octavos", desc:"Canada vs Marruecos",                     estadio:"NRG Stadium, Houston" },                   // sab 4/7 14:00
  { uid:"r19", s:"20260705T170000", e:"20260705T190000", label:"Octavos", desc:"Brasil vs Noruega",                       estadio:"MetLife Stadium, Nueva Jersey" },          // dom 5/7 17:00
  { uid:"r20", s:"20260705T210000", e:"20260705T230000", label:"Octavos", desc:"W Mexico/Ecuador vs W Inglaterra/RD Congo",estadio:"Estadio Azteca, Ciudad de Mexico" },     // dom 5/7 21:00
  { uid:"r21", s:"20260706T160000", e:"20260706T180000", label:"Octavos", desc:"W Portugal/Croacia vs W Espana/Austria",  estadio:"AT&T Stadium, Dallas" },                   // lun 6/7 16:00
  { uid:"r22", s:"20260706T210000", e:"20260706T230000", label:"Octavos", desc:"W Belgica/Senegal vs W EEUU/Bosnia",      estadio:"Lumen Field, Seattle" },                   // lun 6/7 21:00
  { uid:"r23", s:"20260707T130000", e:"20260707T150000", label:"Octavos", desc:"🇦🇷 W Argentina/Cabo Verde vs W Australia/Egipto", estadio:"Mercedes-Benz Stadium, Atlanta", arg:true }, // mar 7/7 13:00
  { uid:"r24", s:"20260707T170000", e:"20260707T190000", label:"Octavos", desc:"W Suiza/Argelia vs W Colombia/Ghana",     estadio:"BC Place, Vancouver" },                    // mar 7/7 17:00
  // Cuartos (fuente FIFA oficial)
  { uid:"r25", s:"20260709T170000", e:"20260709T190000", label:"Cuartos", desc:"W Octavos 89 vs W Octavos 90",  estadio:"Gillette Stadium, Boston" },        // jue 9/7 17:00
  { uid:"r26", s:"20260710T160000", e:"20260710T180000", label:"Cuartos", desc:"W Octavos 93 vs W Octavos 94",  estadio:"SoFi Stadium, Los Angeles" },       // vie 10/7 16:00
  { uid:"r27", s:"20260711T180000", e:"20260711T200000", label:"Cuartos", desc:"W Octavos 91 vs W Octavos 92",  estadio:"Hard Rock Stadium, Miami" },        // sab 11/7 18:00
  { uid:"r28", s:"20260711T220000", e:"20260712T000000", label:"Cuartos", desc:"W Octavos 95 vs W Octavos 96",  estadio:"Arrowhead Stadium, Kansas City" },  // sab 11/7 22:00
  // Semis (fuente FIFA oficial)
  { uid:"r29", s:"20260714T160000", e:"20260714T180000", label:"SEMIFINAL", desc:"W Cuartos 97 vs W Cuartos 98", estadio:"AT&T Stadium, Dallas" },           // mar 14/7 16:00
  { uid:"r30", s:"20260715T160000", e:"20260715T180000", label:"SEMIFINAL", desc:"W Cuartos 99 vs W Cuartos 100",estadio:"Mercedes-Benz Stadium, Atlanta" }, // mie 15/7 16:00
  // 3er puesto y Final
  { uid:"r32", s:"20260718T180000", e:"20260718T200000", label:"Tercer Puesto",      desc:"Perdedor Semi1 vs Perdedor Semi2", estadio:"Hard Rock Stadium, Miami" },    // sab 18/7 18:00
  { uid:"r33", s:"20260719T160000", e:"20260719T180000", label:"FINAL MUNDIAL 2026", desc:"Campeones Semi1 vs Semi2",         estadio:"MetLife Stadium, Nueva Jersey" }, // dom 19/7 16:00
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
  L('BEGIN:VTIMEZONE');
  L('TZID:America/Argentina/Buenos_Aires');
  L('BEGIN:STANDARD');
  L('TZOFFSETFROM:-0300');
  L('TZOFFSETTO:-0300');
  L('TZNAME:ART');
  L('DTSTART:19700101T000000');
  L('END:STANDARD');
  L('END:VTIMEZONE');

  for (const p of PARTIDOS_GRUPO) {
    const prefix = p.arg ? '🇦🇷 ARG: ' : '⚽ ';
    const summary = `${prefix}${p.local} vs ${p.visit} [Gr.${p.grupo} J${p.j}]`;
    L('BEGIN:VEVENT');
    L(`UID:m26-${p.uid}@mundial2026ical`);
    L(`DTSTART;TZID=America/Argentina/Buenos_Aires:${p.s}`);
    L(`DTEND;TZID=America/Argentina/Buenos_Aires:${p.e}`);
    L(`SUMMARY:${esc(summary)}`);
    L(`LOCATION:${esc(p.estadio)}`);
    L(`DESCRIPTION:Grupo ${p.grupo} - Fecha ${p.j}\\nEstadio: ${esc(p.estadio)}${p.arg ? '\\n\\nVamos Argentina!' : ''}`);
    L('END:VEVENT');
  }

  for (const p of ELIMINATORIOS) {
    const esFinal = p.label.includes('FINAL MUNDIAL');
    const isSemi = p.label.includes('SEMIFINAL');
    const isArg = p.arg;
    const emoji = esFinal ? '🏆 ' : isSemi ? '🔥 ' : isArg ? '🇦🇷 ' : '⚽ ';
    L('BEGIN:VEVENT');
    L(`UID:m26-${p.uid}@mundial2026ical`);
    L(`DTSTART;TZID=America/Argentina/Buenos_Aires:${p.s}`);
    L(`DTEND;TZID=America/Argentina/Buenos_Aires:${p.e}`);
    L(`SUMMARY:${esc(`${emoji}${p.label}: ${p.desc}`)}`);
    L(`LOCATION:${esc(p.estadio)}`);
    L(`DESCRIPTION:${esc(p.label)}\\nPartido: ${esc(p.desc)}\\nEstadio: ${esc(p.estadio)}`);
    L('END:VEVENT');
  }

  L('END:VCALENDAR');

  res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-cache, no-store');
  res.status(200).send(lines.join('\r\n'));
};
