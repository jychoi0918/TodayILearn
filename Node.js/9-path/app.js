const path = require('path');

console.log(__dirname);
console.log(__filename);


console.log(path.sep);
console.log(path.delimiter);

console.log(path.basename(__filename));
console.log(path.basename(__filename,'.js')); //제외

//dirname
console.log('dirname = '+path.dirname(__filename));

//extension
console.log('extension = '+path.extname(__filename));

//전체 경로 하나하나 분리 parse
const parsed = path.parse(__filename);
console.log(parsed);
parsed.root;
parsed.name;

//String 형태로 저장
const str = path.format(parsed);
console.log(str);

//isAbsolute  절대경로인지, 상대경로인지 알아보기
console.log('isAbsolute?', path.isAbsolute(__dirname));
console.log('isAbsolute?', path.isAbsolute('__../'));

//normalize 이상한 경로거나, 에러가 있다면 고쳐주는 경로
console.log(path.normalize('./folder//////sub'));

//join
//운영체제 마다 다른걸 적용 못함
console.log(__dirname+'/'+'image');
//모든 운영체제 적용 가능
console.log(__dirname+path.sep+'image');
//간결하게 조인
console.log(paht.join(__dirname,'image'));