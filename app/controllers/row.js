var args = $.args;
console.log(JSON.stringify(args));
/*
var row = {
        id : param.id,
        hasDetail : param.hasDetail,
        hasChild : param.hasChild,
        className : 'rowText',
        height : heightValue,
        backgroundColor : param.backgroundColor,
        color: param.color,
        font: param.font,
        titles: param.title
    };
*/
$.rowTabbedPanel.hasDetail = args.hasDetail;
$.rowTabbedPanel.hasChild = args.hasChild;

$.narrativeTxt.text = args.title;
