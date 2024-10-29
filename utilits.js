class Utilits {

    debug;

    super() {
        this.debug = false;
    }

    translit(word){// делает перевод текста на английский
        try {
            let answer = '';
            let converter = {
                'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
                'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
                'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
                'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
                'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
                'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
                'э': 'e',    'ю': 'yu',   'я': 'ya',
        
                'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
                'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
                'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
                'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
                'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
                'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
                'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
            };
        
            for (let i = 0; i < word.length; ++i ) {
                if (converter[word[i]] == undefined){
                    answer += word[i].replace(' ', '_');
                } else {
                    answer += converter[word[i]].replace(' ', '_');
                }
            }
            return answer;
        
        } catch (e){ 
            if(this.debug) console.log(" translit function error: ", e)
        }

      
    }

    array_Find_By_Id(array, serach_id) {
        try {

            return this.array.filter(item => item.id == delete_id);
            
        } catch (e){ 
            if(this.debug)  console.log(" array_Find_By_Id function error: ", e)
        }
    }

    array_Delete_By_id(array, delete_id){ 
        try {

            // вернёт массив уже без удалённого элемента
            let finding = this.array.filter(item => item.id !== delete_id);
            return finding;

        } catch (e){ 
            if(this.debug)  console.log(" array_Delete_By_id function error: ", e)
        }
    }

    getRandomNumber(min, max) { 
        // возвращает сгенерированное число с заданным диапозоном
        return Math.round( Math.random() * (max - min) + min);
    }

    convert_color_to_alpha(color, opacity) { 
        // переводит обычный цвет без opacyty в rgba с прозрачностью
        var _opacity = Math.round(Math.min(Math.max(opacity ?? 1, 0), 1) * 255);
        return color + _opacity.toString(16).toUpperCase();
    }
}
let utilits = new Utilits()
utilits.debug = true;

let str = "Русская рулетка"
console.log("utilits.translit(str) ",utilits.translit(str))