
function drawInfo() {
    try {    
        var data = [];
        
        for (i in Alloy.Globals.root.template[1].tabbed_panels) {
            
            var row = {
                font : {
                    fontSize : 'Arial'
                },
                color : '#000',
                backgroundColor : '#FFF',
                title : Alloy.Globals.root.template[1].tabbed_panels[i].title,
                id : i,
                hasDetail : true,
                hasChild : true
            };

                
                var rowNew = Alloy.createController('row', row).getView();
                data.push(rowNew);
                rowNew=null;
            
            rowNew = null;
        }
        
        $.tableViewTP.setData(data);
        
            $.tableViewTP.filterAttribute = 'titles';
            
    } catch(err) {
    }
}
drawInfo();
$.tabbedPanelWindow.open();
