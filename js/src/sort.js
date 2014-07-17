define(function(require) {
    'use strict';


return{
sortEvents: function (down, up){
    //debugger
    var ind = moment(down.startDate).year() - moment(up.startDate).year();
    if (ind===0){
        ind = moment(down.startDate).dayOfYear() - moment(up.startDate).dayOfYear();
        if (ind===0){
            ind = moment(down.startDate).hour() - moment(up.startDate).hour();
            if (ind===0){
                ind = moment(down.startDate).minute() - moment(up.startDate).minute();
                if (ind===0){
                    ind = (down.title > up.subject);
                }
            }
        }
    }
    return ind;
}
};
});