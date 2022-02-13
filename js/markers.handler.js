$(document).ready(function() {
    $(window).resize(function() {
        // Actualisation de la page si elargicement ou retraicicement de la page web
        location.reload();
    });

    $("#viewArea").zoomMarker({
        src: "img/fr_map.png",
        rate: 0,
        markers: [
            // Lab Paris 11
            {
                src: "img/Map_poi-default.png",
                x: 255,
                y: 115,
                contactName: 'Le comptoir des branches',
                city: 'Paris',
                address: '21 Rue Laffitte, 75009 Paris',
                description: '',
                name: 'Agnès Colonval',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: false,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                }
            },
            // Lab Paris 13           
            {
                src: "img/Map_poi-default.png",
                x: 255,
                y: 104,
                contactName: 'Le comptoir des branches',
                city: 'Paris',
                address: '11 rue Brillat-Savarin, 75013 Paris',
                description: '',
                name: 'Brigitte Roblet',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: false,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                }
            },
            // Lab Lyon            
            {
                src: "img/Map_poi-default.png",
                x: 334,
                y: 313,
                contactName: 'Le comptoir des branches',
                city: 'Lyon',
                address: '5 Rue Juliette Récamier, 69006 Lyon',
                description: '',
                name: 'Pascal MARCO',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: false,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                }
            },
            // Marseille            
            {
                src: "img/Map_poi-default.png",
                x: 358,
                y: 392,
                contactName: 'Le comptoir des branches',
                city: 'Marseille',
                address: '2 Boulevard de Gabès, 13008 Marseille',
                description: null,
                name: 'Pascal MARCO',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: false,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                }
            },
            // Lille            
            {
                src: "img/Map_poi-default.png",
                x: 277.5,
                y: 38,
                contactName: 'Le comptoir des branches',
                city: 'Lille',
                address: '8 Bd Vauban - 59000 LILLE',
                description: null,
                name: 'Perrine VIDELENNE',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: false,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                }
            },
            // Nantes
            {
                src: "img/Map_poi-default.png",
                x: 113,
                y: 206,
                contactName: 'Le comptoir des branches',
                city: 'Nantes',
                address: '1 avenue des Lions - 44800 Saint-Herblain',
                description: null,
                name: 'Catherine JOUSSE',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: false,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                },

            },
            // Rennes
            {
                src: "img/Map_poi-default.png",
                x: 120,
                y: 155,
                contactName: 'Le comptoir des branches',
                city: 'Rennes',
                address: '2 Square René Cassin 35700 Rennes',
                description: null,
                name: 'Catherine JOUSSE',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: false,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                },

            },
            // Rouen 
            {
                src: "img/Map_poi-default.png",
                x: 208,
                y: 95,
                contactName: 'Le comptoir des branches',
                city: 'Rouen',
                address: '57 Avenue de Bretagne 76175 ROUEN Cedex',
                description: null,
                draggable: false,
                name: 'Christine SICCA',
                tel: 'tel confidentiel',
                email: 'Email confidentielm',
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                },

            },
            // Montpellier  
            {
                src: "img/Map_poi-default.png",
                x: 297,
                y: 375,
                contactName: 'Le comptoir des branches',
                city: 'Montpellier',
                address: 'Les Centuries III, 111 Place Duhem 34000 MONTPELLIER',
                description: null,
                draggable: false,
                name: 'Eric HIEZ',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                },

            },
            // Strasbourg  
            {
                src: "img/Map_poi-default.png",
                x: 425,
                y: 137,
                contactName: 'Le comptoir des branches',
                city: 'Strasbourg',
                address: '35 Avenue de la Paix - 67000 STRASBOURG',
                description: null,
                name: 'Perrine VIDELENNE',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: true,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                },
            },
            /*  Décomentez pour ajouter un nouveau point          
             {
                src: "img/Map_poi-default.png",
                x: 425,
                y: 137,
                contactName: 'Le comptoir des branches',
                city: 'Strasbourg',
                address: '35 Avenue de la Paix - 67000 STRASBOURG',
                description: null,
                name: 'Perrine VIDELENNE',
                tel: 'tel confidentiel',
                email: 'Email confidentiel',
                draggable: true,
                click: function(obj) {
                    $('#viewArea').zoomMarker_ChangeMarkerImage(obj.id);
                    getContent(this);
                },
            },
            */
        ]
    });

    function getContent(obj) {
        $('#content').removeClass('d-none');
        $('#contactName').html(obj.contactName);
        $('#city').html(obj.city);
        $('#address').html(obj.address);
        $('#description').html(obj.description);
        $('#name').html(obj.name);
        $('#tel').html(obj.tel);
        $('#email').html(obj.email);
        $('#email').attr("href", `mailto:${obj.email}`);
        $('#x').html(obj.x);
        $('#y').html(obj.y);
    }


});