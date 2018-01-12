// Przydatne funkcje: addClass, text, append...

const createRow = () => $(`<div class="row">`);
const createColumn = (point, size) => $(`<div class="col-${point}-${size}">`);
const createParagraph = (text) => $(`<p class="description">${text}</p>`);
const $container = $('<div class="container">');

const $firstRow = createRow()
    .append(createColumn('sm',4).append(createParagraph('jeden')))
    .append(createColumn('sm',4).append(createParagraph('dwa')))
    .append(createColumn('sm',4).append(createParagraph('trzy')));

const $secondRow = createRow()
    .append(createColumn('xs',6).css('color', 'red').append(createParagraph('cztery')))
    .append(createColumn('xs',6).css('color', 'red').append(createParagraph('piec')));

const $lastRow = createRow()
    .append(createColumn('md',3).append(createParagraph('szesc')))
    .append(createColumn('md',3).append(createParagraph('siedem')))
    .append(createColumn('md',3).append(createParagraph('osiemm')));



$container
    .append($firstRow)
    .append($secondRow)
    .append($lastRow)
    .appendTo('body');