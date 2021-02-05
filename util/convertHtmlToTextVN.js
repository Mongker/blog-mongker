/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 06/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const convertHtmlToTextVN = (text, setData) => {
    let array = text.slice(0, 700).split('');
    let check = false;
    let start;
    let end;
    if(array.includes('<') || array.includes('>')) {
        array.map((item, i) => {
            if(item === "<" && check === false){
                check = true;
                start = i;
                if( array.includes('')){
                    a(array.join(''))
                }
            }
            if(item === ">" && check) {
                end = i;
                check = false;
                console.log(start, end);
                array.splice(start, (end-start)+1)
                console.log('text: ', array.join(''))
                if(array.includes('>')){
                    convertHtmlToTextVN(array.join(''), setData)
                } else {
                    const txt = array.join('');
                    const txtString = txt.replace('&curren;', '¤')
                        .replace('&nbsp;', ' ')
                        .replace('&iexcl;', 'i')
                        .replace('&cent;', '¢')
                        .replace('&yen;', '')
                        .replace('&brvbar;', '¦')
                        .replace('&sect;', '§')
                        .replace('&uml;', '¨')
                        .replace('&copy;', '©')
                        .replace('&ordf;', 'ª')
                        .replace('&laquo;', '«')
                        .replace('&not;', '¬')
                        .replace('&reg;', '®')
                        .replace('&macr;', '¯')
                        .replace('&deg;', '°')
                        .replace('&plusmn;', '±')
                        .replace('&sup2;', '²')
                        .replace('&sup3;', '³')
                        .replace('&acute;', '´')
                        .replace('&micro;', 'µ')
                        .replace('&para;', '¶')
                        .replace('&middot;', '·')
                        .replace('&cedil;', '¸')
                        .replace('&sup1;', '¹')
                        .replace('&yuml;', 'ÿ')
                        .replace('&thorn;', 'þ')
                        .replace('&yacute;', 'ý')
                        .replace('&uuml;', 'ü')
                        .replace('&ucirc;', 'û')
                        .replace('&uacute;', 'ú')
                        .replace('&ugrave;', 'ù')
                        .replace('&oslash;', 'ø')
                        .replace('&divide;', '÷')
                        .replace('&ouml;', 'ö')
                        .replace('&otilde;', 'õ')
                        .replace('&ocirc;', 'ô')
                        .replace('&oacute;', 'ó')
                        .replace('&ograve;', 'ò')
                        .replace('&ntilde;', 'ñ')
                        .replace('&eth;', 'ð')
                        .replace('&iuml;', 'ï')
                        .replace('&icirc;', 'î')
                        .replace('&iacute;', 'í')
                        .replace('&igrave;', 'ì')
                        .replace('&euml;', 'ë')
                        .replace('&ecirc;', 'ê')
                        .replace('&eacute;', 'é')
                        .replace('&egrave;', 'è')
                        .replace('&ccedil;', 'ç')
                        .replace('&aelig;', 'æ')
                        .replace('&aring;', 'å')
                        .replace('&auml;', 'ä')
                        .replace('&atilde;', 'ã')
                        .replace('&acirc;', 'â')
                        .replace('&aacute;', 'á')
                        .replace('&agrave;', 'à')
                        .replace('&szlig;', 'ß')
                        .replace('&THORN;', 'Þ')
                    console.log('txt:', txtString);
                    setData(txtString);
                    // return txtString;
                }
            }
        })
    }
    // console.log('array ',array.join(''));
    // return array.join('');
}
export default convertHtmlToTextVN;
