const app = angular.module('addressBook',['ngRoute']);
app.config(function ($routeProvider, $locationProvider){
    $routeProvider
        .when('/table',{
            controller:'simpleController',
            templateURL:"/app/"
        })
        .when('/cardpage',{
            controller:'simpleController',
            templateURL:'/app/views/cardpage.html'
        })
        .otherwise({redirectTo:'index.html'});

        $locationProvider.hashPrefix('');
})

app.controller ('simpleController', 
function ($scope) {
    $scope.contacts = [
        {
            "CustomerID": "ALFKI",
            "CompanyName": "Alfreds Futterkiste",
            "ContactName": "Maria Anders",
            "ContactTitle": "Sales Representative",
            "Address": "Obere Str. 57",
            "City": "Berlin",
            "Email": "dummy@gmail.com",
            "PostalCode": "12209",
            "Country": "Germany",
            "Phone": "030-0074321",
            "Fax": "030-0076545"
        },
        {
            "CustomerID": "ANATR",
            "CompanyName": "Ana Trujillo Emparedados y helados",
            "ContactName": "Ana Trujillo",
            "ContactTitle": "Owner",
            "Address": "Avda. de la Constitución 2222",
            "City": "México D.F.",
            "Email": "dummy@gmail.com",
            "PostalCode": "05021",
            "Country": "Mexico",
            "Phone": "(5) 555-4729",
            "Fax": "(5) 555-3745"
        },
        {
            "CustomerID": "ANTON",
            "CompanyName": "Antonio Moreno Taquería",
            "ContactName": "Antonio Moreno",
            "ContactTitle": "Owner",
            "Address": "Mataderos  2312",
            "City": "México D.F.",
            "Email": "dummy@gmail.com",
            "PostalCode": "05023",
            "Country": "Mexico",
            "Phone": "(5) 555-3932"
        },
        {
            "CustomerID": "AROUT",
            "CompanyName": "Around the Horn",
            "ContactName": "Thomas Hardy",
            "ContactTitle": "Sales Representative",
            "Address": "120 Hanover Sq.",
            "City": "London",
            "Email": "dummy@gmail.com",
            "PostalCode": "WA1 1DP",
            "Country": "UK",
            "Phone": "(171) 555-7788",
            "Fax": "(171) 555-6750"
        },
        {
            "CustomerID": "BERGS",
            "CompanyName": "Berglunds snabbköp",
            "ContactName": "Christina Berglund",
            "ContactTitle": "Order Administrator",
            "Address": "Berguvsvägen  8",
            "City": "Luleå",
            "Email": "dummy@gmail.com",
            "PostalCode": "S-958 22",
            "Country": "Sweden",
            "Phone": "0921-12 34 65",
            "Fax": "0921-12 34 67"
        },
        {
            "CustomerID": "BLAUS",
            "CompanyName": "Blauer See Delikatessen",
            "ContactName": "Hanna Moos",
            "ContactTitle": "Sales Representative",
            "Address": "Forsterstr. 57",
            "City": "Mannheim",
            "Email": "dummy@gmail.com",
            "PostalCode": "68306",
            "Country": "Germany",
            "Phone": "0621-08460",
            "Fax": "0621-08924"
        },
        {
            "CustomerID": "BLONP",
            "CompanyName": "Blondel père et fils",
            "ContactName": "Frédérique Citeaux",
            "ContactTitle": "Marketing Manager",
            "Address": "24, place Kléber",
            "City": "Strasbourg",
            "Email": "dummy@gmail.com",
            "PostalCode": "67000",
            "Country": "France",
            "Phone": "88.60.15.31",
            "Fax": "88.60.15.32"
        },
        {
            "CustomerID": "BOLID",
            "CompanyName": "Bólido Comidas preparadas",
            "ContactName": "Martín Sommer",
            "ContactTitle": "Owner",
            "Address": "C/ Araquil, 67",
            "City": "Madrid",
            "Email": "dummy@gmail.com",
            "PostalCode": "28023",
            "Country": "Spain",
            "Phone": "(91) 555 22 82",
            "Fax": "(91) 555 91 99"
        },
        {
            "CustomerID": "BONAP",
            "CompanyName": "Bon app'",
            "ContactName": "Laurence Lebihan",
            "ContactTitle": "Owner",
            "Address": "12, rue des Bouchers",
            "City": "Marseille",
            "Email": "dummy@gmail.com",
            "PostalCode": "13008",
            "Country": "France",
            "Phone": "91.24.45.40",
            "Fax": "91.24.45.41"
        },
        {
            "CustomerID": "BOTTM",
            "CompanyName": "Bottom-Dollar Markets",
            "ContactName": "Elizabeth Lincoln",
            "ContactTitle": "Accounting Manager",
            "Address": "23 Tsawassen Blvd.",
            "City": "Tsawassen",
            "Email": "dummy@gmail.com",
            "Region": "BC",
            "PostalCode": "T2F 8M4",
            "Country": "Canada",
            "Phone": "(604) 555-4729",
            "Fax": "(604) 555-3745"
        },
        {
            "CustomerID": "BSBEV",
            "CompanyName": "B's Beverages",
            "ContactName": "Victoria Ashworth",
            "ContactTitle": "Sales Representative",
            "Address": "Fauntleroy Circus",
            "City": "London",
            "Email": "dummy@gmail.com",
            "PostalCode": "EC2 5NT",
            "Country": "UK",
            "Phone": "(171) 555-1212"
        },
        {
            "CustomerID": "CACTU",
            "CompanyName": "Cactus Comidas para llevar",
            "ContactName": "Patricio Simpson",
            "ContactTitle": "Sales Agent",
            "Address": "Cerrito 333",
            "City": "Buenos Aires",
            "Email": "dummy@gmail.com",
            "PostalCode": "1010",
            "Country": "Argentina",
            "Phone": "(1) 135-5555",
            "Fax": "(1) 135-4892"
        },
        {
            "CustomerID": "CENTC",
            "CompanyName": "Centro comercial Moctezuma",
            "ContactName": "Francisco Chang",
            "ContactTitle": "Marketing Manager",
            "Address": "Sierras de Granada 9993",
            "City": "México D.F.",
            "Email": "dummy@gmail.com",
            "PostalCode": "05022",
            "Country": "Mexico",
            "Phone": "(5) 555-3392",
            "Fax": "(5) 555-7293"
        },
        {
            "CustomerID": "CHOPS",
            "CompanyName": "Chop-suey Chinese",
            "ContactName": "Yang Wang",
            "ContactTitle": "Owner",
            "Address": "Hauptstr. 29",
            "City": "Bern",
            "Email": "dummy@gmail.com",
            "PostalCode": "3012",
            "Country": "Switzerland",
            "Phone": "0452-076545"
        },
        {
            "CustomerID": "COMMI",
            "CompanyName": "Comércio Mineiro",
            "ContactName": "Pedro Afonso",
            "ContactTitle": "Sales Associate",
            "Address": "Av. dos Lusíadas, 23",
            "City": "São Paulo",
            "Email": "dummy@gmail.com",
            "Region": "SP",
            "PostalCode": "05432-043",
            "Country": "Brazil",
            "Phone": "(11) 555-7647"
        },
        {
            "CustomerID": "CONSH",
            "CompanyName": "Consolidated Holdings",
            "ContactName": "Elizabeth Brown",
            "ContactTitle": "Sales Representative",
            "Address": "Berkeley Gardens\n12  Brewery",
            "City": "London",
            "Email": "dummy@gmail.com",
            "PostalCode": "WX1 6LT",
            "Country": "UK",
            "Phone": "(171) 555-2282",
            "Fax": "(171) 555-9199"
        },
        {
            "CustomerID": "DRACD",
            "CompanyName": "Drachenblut Delikatessen",
            "ContactName": "Sven Ottlieb",
            "ContactTitle": "Order Administrator",
            "Address": "Walserweg 21",
            "City": "Aachen",
            "Email": "dummy@gmail.com",
            "PostalCode": "52066",
            "Country": "Germany",
            "Phone": "0241-039123",
            "Fax": "0241-059428"
        },
        {
            "CustomerID": "DUMON",
            "CompanyName": "Du monde entier",
            "ContactName": "Janine Labrune",
            "ContactTitle": "Owner",
            "Address": "67, rue des Cinquante Otages",
            "City": "Nantes",
            "Email": "dummy@gmail.com",
            "PostalCode": "44000",
            "Country": "France",
            "Phone": "40.67.88.88",
            "Fax": "40.67.89.89"
        },
        {
            "CustomerID": "EASTC",
            "CompanyName": "Eastern Connection",
            "ContactName": "Ann Devon",
            "ContactTitle": "Sales Agent",
            "Address": "35 King George",
            "City": "London",
            "Email": "dummy@gmail.com",
            "PostalCode": "WX3 6FW",
            "Country": "UK",
            "Phone": "(171) 555-0297",
            "Fax": "(171) 555-3373"
        },
        {
            "CustomerID": "ERNSH",
            "CompanyName": "Ernst Handel",
            "ContactName": "Roland Mendel",
            "ContactTitle": "Sales Manager",
            "Address": "Kirchgasse 6",
            "City": "Graz",
            "Email": "dummy@gmail.com",
            "PostalCode": "8010",
            "Country": "Austria",
            "Phone": "7675-3425",
            "Fax": "7675-3426"
        },
        {
            "CustomerID": "FAMIA",
            "CompanyName": "Familia Arquibaldo",
            "ContactName": "Aria Cruz",
            "ContactTitle": "Marketing Assistant",
            "Address": "Rua Orós, 92",
            "City": "São Paulo",
            "Email": "dummy@gmail.com",
            "Region": "SP",
            "PostalCode": "05442-030",
            "Country": "Brazil",
            "Phone": "(11) 555-9857"
        },
        {
            "CustomerID": "FISSA",
            "CompanyName": "FISSA Fabrica Inter. Salchichas S.A.",
            "ContactName": "Diego Roel",
            "ContactTitle": "Accounting Manager",
            "Address": "C/ Moralzarzal, 86",
            "City": "Madrid",
            "Email": "dummy@gmail.com",
            "PostalCode": "28034",
            "Country": "Spain",
            "Phone": "(91) 555 94 44",
            "Fax": "(91) 555 55 93"
        },
        {
            "CustomerID": "FOLIG",
            "CompanyName": "Folies gourmandes",
            "ContactName": "Martine Rancé",
            "ContactTitle": "Assistant Sales Agent",
            "Address": "184, chaussée de Tournai",
            "City": "Lille",
            "Email": "dummy@gmail.com",
            "PostalCode": "59000",
            "Country": "France",
            "Phone": "20.16.10.16",
            "Fax": "20.16.10.17"
        },
        {
            "CustomerID": "FOLKO",
            "CompanyName": "Folk och fä HB",
            "ContactName": "Maria Larsson",
            "ContactTitle": "Owner",
            "Address": "Åkergatan 24",
            "City": "Bräcke",
            "Email": "dummy@gmail.com",
            "PostalCode": "S-844 67",
            "Country": "Sweden",
            "Phone": "0695-34 67 21"
        },
        {
            "CustomerID": "FRANK",
            "CompanyName": "Frankenversand",
            "ContactName": "Peter Franken",
            "ContactTitle": "Marketing Manager",
            "Address": "Berliner Platz 43",
            "City": "München",
            "Email": "dummy@gmail.com",
            "PostalCode": "80805",
            "Country": "Germany",
            "Phone": "089-0877310",
            "Fax": "089-0877451"
        },
        {
            "CustomerID": "FRANR",
            "CompanyName": "France restauration",
            "ContactName": "Carine Schmitt",
            "ContactTitle": "Marketing Manager",
            "Address": "54, rue Royale",
            "City": "Nantes",
            "Email": "dummy@gmail.com",
            "PostalCode": "44000",
            "Country": "France",
            "Phone": "40.32.21.21",
            "Fax": "40.32.21.20"
        },
        {
            "CustomerID": "FRANS",
            "CompanyName": "Franchi S.p.A.",
            "ContactName": "Paolo Accorti",
            "ContactTitle": "Sales Representative",
            "Address": "Via Monte Bianco 34",
            "City": "Torino",
            "Email": "dummy@gmail.com",
            "PostalCode": "10100",
            "Country": "Italy",
            "Phone": "011-4988260",
            "Fax": "011-4988261"
        },
        {
            "CustomerID": "FURIB",
            "CompanyName": "Furia Bacalhau e Frutos do Mar",
            "ContactName": "Lino Rodriguez",
            "ContactTitle": "Sales Manager",
            "Address": "Jardim das rosas n. 32",
            "City": "Lisboa",
            "Email": "dummy@gmail.com",
            "PostalCode": "1675",
            "Country": "Portugal",
            "Phone": "(1) 354-2534",
            "Fax": "(1) 354-2535"
        },
        {
            "CustomerID": "GALED",
            "CompanyName": "Galería del gastrónomo",
            "ContactName": "Eduardo Saavedra",
            "ContactTitle": "Marketing Manager",
            "Address": "Rambla de Cataluña, 23",
            "City": "Barcelona",
            "Email": "dummy@gmail.com",
            "PostalCode": "08022",
            "Country": "Spain",
            "Phone": "(93) 203 4560",
            "Fax": "(93) 203 4561"
        },
        {
            "CustomerID": "GODOS",
            "CompanyName": "Godos Cocina Típica",
            "ContactName": "José Pedro Freyre",
            "ContactTitle": "Sales Manager",
            "Address": "C/ Romero, 33",
            "City": "Sevilla",
            "Email": "dummy@gmail.com",
            "PostalCode": "41101",
            "Country": "Spain",
            "Phone": "(95) 555 82 82"
        },
        {
            "CustomerID": "GOURL",
            "CompanyName": "Gourmet Lanchonetes",
            "ContactName": "André Fonseca",
            "ContactTitle": "Sales Associate",
            "Address": "Av. Brasil, 442",
            "City": "Campinas",
            "Email": "dummy@gmail.com",
            "Region": "SP",
            "PostalCode": "04876-786",
            "Country": "Brazil",
            "Phone": "(11) 555-9482"
        },
        {
            "CustomerID": "GREAL",
            "CompanyName": "Great Lakes Food Market",
            "ContactName": "Howard Snyder",
            "ContactTitle": "Marketing Manager",
            "Address": "2732 Baker Blvd.",
            "City": "Eugene",
            "Email": "dummy@gmail.com",
            "Region": "OR",
            "PostalCode": "97403",
            "Country": "USA",
            "Phone": "(503) 555-7555"
        },
        {
            "CustomerID": "GROSR",
            "CompanyName": "GROSELLA-Restaurante",
            "ContactName": "Manuel Pereira",
            "ContactTitle": "Owner",
            "Address": "5ª Ave. Los Palos Grandes",
            "City": "Caracas",
            "Email": "dummy@gmail.com",
            "Region": "DF",
            "PostalCode": "1081",
            "Country": "Venezuela",
            "Phone": "(2) 283-2951",
            "Fax": "(2) 283-3397"
        },
        {
            "CustomerID": "HANAR",
            "CompanyName": "Hanari Carnes",
            "ContactName": "Mario Pontes",
            "ContactTitle": "Accounting Manager",
            "Address": "Rua do Paço, 67",
            "City": "Rio de Janeiro",
            "Email": "dummy@gmail.com",
            "Region": "RJ",
            "PostalCode": "05454-876",
            "Country": "Brazil",
            "Phone": "(21) 555-0091",
            "Fax": "(21) 555-8765"
        },
        {
            "CustomerID": "HILAA",
            "CompanyName": "HILARIÓN-Abastos",
            "ContactName": "Carlos Hernández",
            "ContactTitle": "Sales Representative",
            "Address": "Carrera 22 con Ave. Carlos Soublette #8-35",
            "City": "San Cristóbal",
            "Email": "dummy@gmail.com",
            "Region": "Táchira",
            "PostalCode": "5022",
            "Country": "Venezuela",
            "Phone": "(5) 555-1340",
            "Fax": "(5) 555-1948"
        },
        {
            "CustomerID": "HUNGC",
            "CompanyName": "Hungry Coyote Import Store",
            "ContactName": "Yoshi Latimer",
            "ContactTitle": "Sales Representative",
            "Address": "City Center Plaza\n516 Main St.",
            "City": "Elgin",
            "Email": "dummy@gmail.com",
            "Region": "OR",
            "PostalCode": "97827",
            "Country": "USA",
            "Phone": "(503) 555-6874",
            "Fax": "(503) 555-2376"
        },
        {
            "CustomerID": "HUNGO",
            "CompanyName": "Hungry Owl All-Night Grocers",
            "ContactName": "Patricia McKenna",
            "ContactTitle": "Sales Associate",
            "Address": "8 Johnstown Road",
            "City": "Cork",
            "Email": "dummy@gmail.com",
            "Region": "Co. Cork",
            "Country": "Ireland",
            "Phone": "2967 542",
            "Fax": "2967 3333"
        },
        {
            "CustomerID": "ISLAT",
            "CompanyName": "Island Trading",
            "ContactName": "Helen Bennett",
            "ContactTitle": "Marketing Manager",
            "Address": "Garden House\nCrowther Way",
            "City": "Cowes",
            "Email": "dummy@gmail.com",
            "Region": "Isle of Wight",
            "PostalCode": "PO31 7PJ",
            "Country": "UK",
            "Phone": "(198) 555-8888"
        },
        {
            "CustomerID": "KOENE",
            "CompanyName": "Königlich Essen",
            "ContactName": "Philip Cramer",
            "ContactTitle": "Sales Associate",
            "Address": "Maubelstr. 90",
            "City": "Brandenburg",
            "Email": "dummy@gmail.com",
            "PostalCode": "14776",
            "Country": "Germany",
            "Phone": "0555-09876"
        },
        {
            "CustomerID": "LACOR",
            "CompanyName": "La corne d'abondance",
            "ContactName": "Daniel Tonini",
            "ContactTitle": "Sales Representative",
            "Address": "67, avenue de l'Europe",
            "City": "Versailles",
            "Email": "dummy@gmail.com",
            "PostalCode": "78000",
            "Country": "France",
            "Phone": "30.59.84.10",
            "Fax": "30.59.85.11"
        },
        {
            "CustomerID": "LAMAI",
            "CompanyName": "La maison d'Asie",
            "ContactName": "Annette Roulet",
            "ContactTitle": "Sales Manager",
            "Address": "1 rue Alsace-Lorraine",
            "City": "Toulouse",
            "Email": "dummy@gmail.com",
            "PostalCode": "31000",
            "Country": "France",
            "Phone": "61.77.61.10",
            "Fax": "61.77.61.11"
        },
        {
            "CustomerID": "LAUGB",
            "CompanyName": "Laughing Bacchus Wine Cellars",
            "ContactName": "Yoshi Tannamuri",
            "ContactTitle": "Marketing Assistant",
            "Address": "1900 Oak St.",
            "City": "Vancouver",
            "Email": "dummy@gmail.com",
            "Region": "BC",
            "PostalCode": "V3F 2K1",
            "Country": "Canada",
            "Phone": "(604) 555-3392",
            "Fax": "(604) 555-7293"
        },
        {
            "CustomerID": "LAZYK",
            "CompanyName": "Lazy K Kountry Store",
            "ContactName": "John Steel",
            "ContactTitle": "Marketing Manager",
            "Address": "12 Orchestra Terrace",
            "City": "Walla Walla",
            "Email": "dummy@gmail.com",
            "Region": "WA",
            "PostalCode": "99362",
            "Country": "USA",
            "Phone": "(509) 555-7969",
            "Fax": "(509) 555-6221"
        },
        {
            "CustomerID": "LEHMS",
            "CompanyName": "Lehmanns Marktstand",
            "ContactName": "Renate Messner",
            "ContactTitle": "Sales Representative",
            "Address": "Magazinweg 7",
            "City": "Frankfurt a.M.",
            "Email": "dummy@gmail.com",
            "PostalCode": "60528",
            "Country": "Germany",
            "Phone": "069-0245984",
            "Fax": "069-0245874"
        },
        {
            "CustomerID": "LETSS",
            "CompanyName": "Let's Stop N Shop",
            "ContactName": "Jaime Yorres",
            "ContactTitle": "Owner",
            "Address": "87 Polk St.\nSuite 5",
            "City": "San Francisco",
            "Email": "dummy@gmail.com",
            "Region": "CA",
            "PostalCode": "94117",
            "Country": "USA",
            "Phone": "(415) 555-5938"
        },
        {
            "CustomerID": "LILAS",
            "CompanyName": "LILA-Supermercado",
            "ContactName": "Carlos González",
            "ContactTitle": "Accounting Manager",
            "Address": "Carrera 52 con Ave. Bolívar #65-98 Llano Largo",
            "City": "Barquisimeto",
            "Email": "dummy@gmail.com",
            "Region": "Lara",
            "PostalCode": "3508",
            "Country": "Venezuela",
            "Phone": "(9) 331-6954",
            "Fax": "(9) 331-7256"
        },
        {
            "CustomerID": "LINOD",
            "CompanyName": "LINO-Delicateses",
            "ContactName": "Felipe Izquierdo",
            "ContactTitle": "Owner",
            "Address": "Ave. 5 de Mayo Porlamar",
            "City": "I. de Margarita",
            "Email": "dummy@gmail.com",
            "Region": "Nueva Esparta",
            "PostalCode": "4980",
            "Country": "Venezuela",
            "Phone": "(8) 34-56-12",
            "Fax": "(8) 34-93-93"
        },
        {
            "CustomerID": "LONEP",
            "CompanyName": "Lonesome Pine Restaurant",
            "ContactName": "Fran Wilson",
            "ContactTitle": "Sales Manager",
            "Address": "89 Chiaroscuro Rd.",
            "City": "Portland",
            "Email": "dummy@gmail.com",
            "Region": "OR",
            "PostalCode": "97219",
            "Country": "USA",
            "Phone": "(503) 555-9573",
            "Fax": "(503) 555-9646"
        },
        {
            "CustomerID": "MAGAA",
            "CompanyName": "Magazzini Alimentari Riuniti",
            "ContactName": "Giovanni Rovelli",
            "ContactTitle": "Marketing Manager",
            "Address": "Via Ludovico il Moro 22",
            "City": "Bergamo",
            "Email": "dummy@gmail.com",
            "PostalCode": "24100",
            "Country": "Italy",
            "Phone": "035-640230",
            "Fax": "035-640231"
        },
        {
            "CustomerID": "MAISD",
            "CompanyName": "Maison Dewey",
            "ContactName": "Catherine Dewey",
            "ContactTitle": "Sales Agent",
            "Address": "Rue Joseph-Bens 532",
            "City": "Bruxelles",
            "Email": "dummy@gmail.com",
            "PostalCode": "B-1180",
            "Country": "Belgium",
            "Phone": "(02) 201 24 67",
            "Fax": "(02) 201 24 68"
        }
    ]
}
)