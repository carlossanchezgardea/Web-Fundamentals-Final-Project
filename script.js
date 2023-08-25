const merchants = [
    {
        "name": "Outlaw",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Outlaw-Logo.png",
        "product_url": "https://outlawjackets.com/?gclid=CjwKCAiAgbiQBhAHEiwAuQ6Bkow51Dstzb1-ZOaqPrZzxQMfka-anDZVXVUAHusC7cXffmX0bw2fcxoCdecQAvD_BwE",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Outlaw-Bg.png",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 30}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "New Balance",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/NewBalance-Logo.png",
        "product_url": "https://www.newbalancemexico.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/newbalance-bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 16}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 12}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ikea",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ikea-Logo.png",
        "product_url": "https://www.ikea.com/mx",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ikea-bg.jpeg",
        "priority_categories": "[{\"category\": \"TOP_MERCHANTS\", \"priority\": 1}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 1}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Kokyoko",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Kokyoko-Logo.png",
        "product_url": "https://kokyoko.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/kokyoko-bg.jpeg",
        "priority_categories": "[{\"category\": \"SHOPPING\", \"priority\": 8}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Almacenes Ánfora",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/anfora-logo.png",
        "product_url": "https://www.almacenesanfora.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/anfora-bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 9}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 10}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Carrizo",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Carrizo-Logo.png",
        "product_url": "https://www.carrizo.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Carrizo-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_AND_FURNITURE\", \"priority\": 2}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "AliExpress",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/AliExpress-Logo.png",
        "product_url": "https://best.aliexpress.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/AliExpress-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TOP_MERCHANTS\", \"priority\": 14}, {\"category\": \"SHOPPING\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 12}, {\"category\": \"APP_ONLY\", \"priority\": 40}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Romero & Mcpaul",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Romero%26McPaul-Logo.png",
        "product_url": "https://romeromcpaul.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/RomeroMcPaul-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 31}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Clorofila",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Clorofila-Logo.png",
        "product_url": "https://www.clorofilaseawear.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Clorofila-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ALL_MENS_FASHION\", \"priority\": 26}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Porte",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/porte-logo.png",
        "product_url": "https://porte.site/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/porte-bg.jpeg",
        "priority_categories": "[{\"category\": \"ALL_MENS_FASHION\", \"priority\": 28}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Hawkers",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/hawkers-logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=19695&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Hawkers-Bg.png",
        "priority_categories": "[{\"category\": \"EYEWEAR\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Artixu",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Artixu-Logo.png",
        "product_url": "https://artixu.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Artiux-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 10}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Tessoterra",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TessoTerra-Logo.png",
        "product_url": "https://tessoterramx.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TessoTerra-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 6}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Hickok",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/hickok-logo.png",
        "product_url": "https://hickok.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/hickok-bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 27}, {\"category\": \"ACCESSORIES\", \"priority\": 11}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Hellmet Motorcycles",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/hellmet-logo.png",
        "product_url": "https://hellmet.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/hellmet-bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 13}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ecocarinho",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ecocarinho-Logo.png",
        "product_url": "https://ecocarinho.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ecocarinho-Bg.jpeg",
        "priority_categories": "[{\"category\": \"KIDS\", \"priority\": 8}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Airbnb",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Airbnb-Logo.png",
        "product_url": "https://airbnb.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/airbnb-bg.jpeg",
        "priority_categories": "[{\"category\": \"TOP_MERCHANTS\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Tula Accessorios",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Tula-Logo.png",
        "product_url": "https://tulamayoreo.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Tula-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 22}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Nelo Store",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/nelo-logo.png",
        "product_url": "https://www.nelo.store/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/nelo-bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 23}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Costco",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Costco-Logo.png",
        "product_url": "https://www.costco.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Costco-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TOP_MERCHANTS\", \"priority\": 8}, {\"category\": \"GROCERIES\", \"priority\": 6}, {\"category\": \"HOME_GOODS\", \"priority\": 8}, {\"category\": \"GROCERIES\", \"priority\": 6}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 8}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 30}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"PETS\", \"priority\": 4}, {\"category\": \"STORES\", \"priority\": 30}, {\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Innova",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Innova-Logo.png",
        "product_url": "https://track.go2aluna.co/click?pid=131&offer_id=1027",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Innova-Bg.png",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 11}, {\"category\": \"HOME_GOODS\", \"priority\": 11}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 30}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Tanya Moss",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TanyaMoss-Logo.png",
        "product_url": "https://www.tanyamoss.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TanyaMoss-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ACCESSORIES\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Steren",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Steren-Logo.png",
        "product_url": "https://www.steren.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Steren-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 6}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Oysho",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Oysho-Logo.png",
        "product_url": "https://www.oysho.com/mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Oysho-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 2}, {\"category\": \"TOP_FASHION\", \"priority\": 10}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Home Depot",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/HomeDepot-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYq",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/HomeDepot-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TOP_MERCHANTS\", \"priority\": 3}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 5}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Reebok",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Reebok-Logo.png",
        "product_url": "https://www.reebok.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Reebok-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TOP_MERCHANTS\", \"priority\": 5}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Phiten",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Phiten-Logo.png",
        "product_url": "https://phiten.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Phiten-Bg.jpeg",
        "priority_categories": "[{\"category\": \"SPORTING_GOODS\", \"priority\": 11}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"SPORTS\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Under Armour",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/UnderArmour-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYo",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/UnderArmour-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ALL_MENS_FASHION\", \"priority\": 8}, {\"category\": \"SPORTING_GOODS\", \"priority\": 4}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"SPORTS\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ray-Ban",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/RayBan-Logo.png",
        "product_url": "https://www.ray-ban.com/mexico",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/RayBan-bg.jpeg",
        "priority_categories": "[{\"category\": \"EYEWEAR\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Liverpool",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Liverpool-Logo.png",
        "product_url": "https://www.liverpool.com.mx/tienda/home",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Liverpool-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 1}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 12}, {\"category\": \"DEPARTMENT_STORE\", \"priority\": 1}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 5}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 2}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 26}, {\"category\": \"STORES\", \"priority\": 30}, {\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Puma",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Puma-Logo.png",
        "product_url": "https://mx.puma.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Puma-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 8}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 17}, {\"category\": \"SPORTING_GOODS\", \"priority\": 7}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 8}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"SPORTS\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Imports77",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Imports77-Logo.png",
        "product_url": "https://imports77.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Imports77-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 20}, {\"category\": \"GAMING\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Expedia",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Expedia-Logo.png",
        "product_url": "https://www.dpbolvw.net/click-100572922-13852757",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Expedia-Bg.png",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "LovelyWholesale",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/LovelyWholesale-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYI",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/LovelyWholesale-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Shopee",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Shopee-Logo.png",
        "product_url": "https://www.shopee.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Shopee-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 9}, {\"category\": \"SHOPPING\", \"priority\": 6}, {\"category\": \"GAMING\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Lego",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Lego-Logo2.png",
        "product_url": "https://sovrn.co/1gik2b7",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Lego-Bg.jpeg",
        "priority_categories": "[{\"category\": \"KIDS\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Palacio De Hierro",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/PalacioDeHierro-Logo.png",
        "product_url": "https://ad.soicos.com/-1nOR",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/PalacioDeHierro-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 11}, {\"category\": \"DEPARTMENT_STORE\", \"priority\": 4}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Fc Juarez",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FcJuarez-Logo.png",
        "product_url": "https://bravotienda.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FcJuarez-Bg.jpeg",
        "priority_categories": "[{\"category\": \"SPORTING_GOODS\", \"priority\": 10}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"SPORTS\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Birkenstock",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Birkenstock-Logo.png",
        "product_url": "https://www.birkenstock.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Birkenstock-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 22}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Petland",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Petland-Logo.png",
        "product_url": "http://petlandmexico.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Petland-Bg.jpeg",
        "priority_categories": "[{\"category\": \"PETS\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Bombavista",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Bombavista-Logo.png",
        "product_url": "https://tc.tradetracker.net/?c=37038&m=12&a=423721&r=&u=",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Bombavista-Bg.jpeg",
        "priority_categories": "[{\"category\": \"EYEWEAR\", \"priority\": 6}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Walmart",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Walmart-Logo.png",
        "product_url": "https://ad.soicos.com/-1l0j",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Walmart-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 2}, {\"category\": \"ELECTRONICS\", \"priority\": 8}, {\"category\": \"DEPARTMENT_STORE\", \"priority\": 3}, {\"category\": \"GROCERIES\", \"priority\": 8}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 3}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 3}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 30}, {\"category\": \"GENERAL\", \"priority\": 28}, {\"category\": \"PETS\", \"priority\": 4}, {\"category\": \"APP_ONLY\", \"priority\": 40}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Coppel",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Coppel-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=50533&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Coppel-Bg.png",
        "priority_categories": "[{\"category\": \"HOME_AND_FURNITURE\", \"priority\": 8}, {\"category\": \"ELECTRONICS\", \"priority\": 11}, {\"category\": \"DEPARTMENT_STORE\", \"priority\": 2}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 7}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 4}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}, {\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ebay",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Ebay-Logo.png",
        "product_url": "https://mx.ebay.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ebay-Bg.jpeg",
        "priority_categories": "[{\"category\": \"SHOPPING\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ELECTRONICS\", \"priority\": 30}, {\"category\": \"HOME_GOODS\", \"priority\": 30}, {\"category\": \"FASHION\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Sally Beauty",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/SallyBeauty-Logo.png",
        "product_url": "https://www.sallymexico.com",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/SallyBeauty-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 3}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Kayak",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Kayak-Logo.png",
        "product_url": "https://www.kayak.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Kayak-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 11}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "La Comer",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/LaComer-Logo.png",
        "product_url": "https://www.lacomer.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/LaComer-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GROCERIES\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"KIDS\", \"priority\": 15}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "GNC",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/GNC-Logo.png",
        "product_url": "https://gnc.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/GNC-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Microsoft",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Microsoft-Logo.png",
        "product_url": "https://sovrn.co/1b3mowp",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Microsoft-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 17}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 10}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Dockers",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Dockers-Logo.png",
        "product_url": "https://www.dockers.com.mx",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Dockers-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 10}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 24}, {\"category\": \"MENS_FASHION\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Calvin Klein",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/CalvinKlein-Logo.png",
        "product_url": "https://ad.soicos.com/-1oEa",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/CalvinKlein-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 2}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 10}, {\"category\": \"MENS_FASHION\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Samsung",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Samsung-Logo.png",
        "product_url": "https://ad.soicos.com/-1lAr",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Samsung-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 29}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 13}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Todomoda",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TodoModa-Logo.png",
        "product_url": "https://mx.todomoda.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TodoModa-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 15}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 17}, {\"category\": \"ACCESSORIES\", \"priority\": 8}, {\"category\": \"KIDS\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Hollister",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Hollister-Logo.png",
        "product_url": "https://www.hollisterco.com/shop/wd",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Hollister-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 22}, {\"category\": \"MENS_FASHION\", \"priority\": 16}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Gameplanet",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Gameplanet-Logo.png",
        "product_url": "https://gameplanet.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Gameplanet-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 13}, {\"category\": \"GAMING\", \"priority\": 2}, {\"category\": \"KIDS\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Justo",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Justo-Logo.png",
        "product_url": "https://justo.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Justo-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GROCERIES\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Miniso",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Miniso-Logo.png",
        "product_url": "https://www.miniso.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Miniso-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 6}, {\"category\": \"ACCESSORIES\", \"priority\": 1}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 6}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 30}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Lenovo",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Lenovo-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYV",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Lenovo-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 23}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 12}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Sephora",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sephora-Logo.png",
        "product_url": "https://ad.soicos.com/-1hWY",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sephora-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 5}, {\"category\": \"BEAUTY\", \"priority\": 30}, {\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Bershka",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Bershka-Logo.png",
        "product_url": "https://www.bershka.com/mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Bershka-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 9}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 10}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 19}, {\"category\": \"MENS_FASHION\", \"priority\": 12}, {\"category\": \"TOP_FASHION\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Sun Glass Hut",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/SunGlassHut-Logo.png",
        "product_url": "https://sovrn.co/fa6t74g",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/SunglassHut-bg.jpeg",
        "priority_categories": "[{\"category\": \"EYEWEAR\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Cinépolis (web)",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Cinepolis-Logo.png",
        "product_url": "https://cinepolis.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Cinepolis-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 23}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 8}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Mac",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Mac-Logo.png",
        "product_url": "https://www.maccosmetics.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Mac-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 6}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Farmacias Similares",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FarmaciasSimilares-Logo.png",
        "product_url": "https://www.farmaciasdesimilares.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FarmaciasSimilares-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Ellaz",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ellaz-Logo.png",
        "product_url": "https://ellaz.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ellaz-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Sam's Club",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sams-Logo.png",
        "product_url": "https://ad.soicos.com/-1hX7",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sams-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GROCERIES\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 7}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Cole Haan",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ColeHaan-Logo.png",
        "product_url": "https://redirect.viglink.com/?u=http%3A%2F%2Fcolehaan.com&key=31ff06970f0752ebe54fa15ba9279c30",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ColeHaan-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 13}, {\"category\": \"FOOTWEAR\", \"priority\": 11}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 12}, {\"category\": \"MENS_FASHION\", \"priority\": 11}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Linio México",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/LinioMexico-Logo.png",
        "product_url": "https://www.linio.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/LinioMexico-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 2}, {\"category\": \"SHOPPING\", \"priority\": 4}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 2}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Aeroméxico",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Aeromexico-Logo.png",
        "product_url": "https://aeromexico.com/es-mx",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Aeromexico-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 2}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Hoteles.com",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Hoteles-Logo.png",
        "product_url": "https://www.hoteles.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Hoteles.Com-Bg.png",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 13}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "LOB",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/LOB-Logo.png",
        "product_url": "https://track.go2aluna.co/click?pid=131&offer_id=724",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/LOB-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 29}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ado",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ado-Logo.png",
        "product_url": "https://www.ado.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ado-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Innovasport",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Innovasport-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=51379&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Innovasport-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ALL_MENS_FASHION\", \"priority\": 5}, {\"category\": \"SPORTING_GOODS\", \"priority\": 2}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"SPORTS\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}, {\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Radio Shack",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/RadioShack-Logo.png",
        "product_url": "https://www.radioshack.com.mx/store/radioshack/en/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/RadioShack-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 5}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 8}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Aeromar",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Aeromar-Logo.png",
        "product_url": "https://ad.soicos.com/-1ioV",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Aeromar-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 8}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "+Kota",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/MasKota-Logo.png",
        "product_url": "https://maskota.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/MasKota-Bg.jpeg",
        "priority_categories": "[{\"category\": \"PETS\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Farmacias del Ahorro",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FarmaciasDelahorro-Logo.png",
        "product_url": "https://www.fahorro.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FarmaciasDelAhorro-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Booking.com",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Booking-Logo.png",
        "product_url": "https://www.booking.com/index.html?aid=2233722;label=pagebasket-ban-2233722-click",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Booking-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "iShop Mixup",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/IshopMixup-Logo.png",
        "product_url": "https://www.ishopmixup.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/IshopMixup-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 5}, {\"category\": \"ELECTRONICS\", \"priority\": 4}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "H&M",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/H&M-Logo.png",
        "product_url": "https://sovrn.co/159voxu",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/H&M-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 4}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 9}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 11}, {\"category\": \"MENS_FASHION\", \"priority\": 4}, {\"category\": \"TOP_FASHION\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 10}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Hostelworld",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Hostelworld-Logo.png",
        "product_url": "https://ad.admitad.com/g/ad9lkci22p9f46dd94d9d7e34fe510",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Hostelworld-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 12}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Laika",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Laika-Logo.png",
        "product_url": "https://laika.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Laika-Bg.jpeg",
        "priority_categories": "[{\"category\": \"PETS\", \"priority\": 2}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ticketmaster",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ticketmaster-Logo.png",
        "product_url": "https://www.ticketmaster.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ticketmaster-Bg.jpeg",
        "priority_categories": "[{\"category\": \"EVENTS\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Lux",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Lux-Logo.png",
        "product_url": "https://lux.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Lux-Bg.png",
        "priority_categories": "[{\"category\": \"EYEWEAR\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Gandhi",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ghandi-Logo.png",
        "product_url": "https://ad.soicos.com/-1l9l",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ghandi-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 2}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Avianca",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Avianca-Logo.png",
        "product_url": "https://ad.soicos.com/-1hXF",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Avianca-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Yema",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Yema-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYn",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Yema-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GROCERIES\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Sanborns",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sanborns-Logo.png",
        "product_url": "https://ad.soicos.com/-1lFI",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sanborns-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 18}, {\"category\": \"SHOPPING\", \"priority\": 10}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FASHION\", \"priority\": 15}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"BEAUTY\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "American Eagle",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/AmericanEagle-Logo.png",
        "product_url": "https://ad.soicos.com/-1l0c",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/AmericanEagle-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 23}, {\"category\": \"MENS_FASHION\", \"priority\": 19}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Pull And Bear",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/PullAndBear-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=32943&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/PullAndBear-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 11}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 20}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 3}, {\"category\": \"MENS_FASHION\", \"priority\": 7}, {\"category\": \"TOP_FASHION\", \"priority\": 11}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Zulily",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Zulily-Logo.png",
        "product_url": "https://redirect.viglink.com?u=http%3A%2F%2Fzulily.com&key=31ff06970f0752ebe54fa15ba9279c30",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Zulily-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"SHOPPING\", \"priority\": 11}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "SHEIN",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Shein-Logo.png",
        "product_url": "https://www.shein.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Shein-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 3}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 6}, {\"category\": \"ACCESSORIES\", \"priority\": 19}, {\"category\": \"MENS_FASHION\", \"priority\": 3}, {\"category\": \"TOP_FASHION\", \"priority\": 3}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 24}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Alo Yoga",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/AloYoga-Logo.png",
        "product_url": "https://www.aloyogaemexico.com",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/AloYoga-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 14}, {\"category\": \"SPORTING_GOODS\", \"priority\": 8}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"SPORTS\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Aeropostale",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Aeropostale-Logo.png",
        "product_url": "https://redirect.viglink.com/?u=http%3A%2F%2Faeropostale.com&key=31ff06970f0752ebe54fa15ba9279c30",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Aeropostale-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 14}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 7}, {\"category\": \"MENS_FASHION\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Netwey",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Netwey-Logo.png",
        "product_url": "https://secure.netwey.com.mx/site/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Netwey-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 16}, {\"category\": \"ELECTRONICS\", \"priority\": 24}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 30}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Foreo",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Foreo-Logo.png",
        "product_url": "https://ad.soicos.com/-1hXa",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Foreo-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 7}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "HP",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/HP-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=7558&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/HP-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 30}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Soriana",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Soriana-Logo.png",
        "product_url": "https://ad.soicos.com/-1l0b",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Soriana-Bg.jpeg",
        "priority_categories": "[{\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Sfera",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sfera-Logo.png",
        "product_url": "https://www.sfera.com/mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sfera-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 12}, {\"category\": \"FOOTWEAR\", \"priority\": 12}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"TOP_FASHION\", \"priority\": 12}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Desigual",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Desigual-Logo.png",
        "product_url": "https://sovrn.co/116qyfl",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Desigual-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Seas Mx",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/SeasMx-Logo.png",
        "product_url": "https://seasmx.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/SeasMx-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GAMING\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Origins",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Origins-Logo.png",
        "product_url": "https://www.origins.com.mx",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Origins-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 8}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Gearbest",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Gearbest-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYP",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Gearbest-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ELECTRONICS\", \"priority\": 28}, {\"category\": \"MENS_FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Claro Shop",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ClaroShop-Logo.png",
        "product_url": "https://ad.soicos.com/-1l9i",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ClaroShop-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 3}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Cebasic",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Cebasic-Logo.png",
        "product_url": "https://cebasic.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Cebasic-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 21}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Clinique",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Clinique-Logo.png",
        "product_url": "https://www.clinique.com.mx",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Clinique-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 2}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "TAF",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TAF-Logo.png",
        "product_url": "https://www.taf.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TAF-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 19}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 14}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "New Era",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/NewEra-Logo.png",
        "product_url": "https://www.newera.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/NewEra-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 6}, {\"category\": \"ACCESSORIES\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Elektra",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Elektra-Logo.png",
        "product_url": "https://ad.soicos.com/-1hX8",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Elektra-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_AND_FURNITURE\", \"priority\": 7}, {\"category\": \"ELECTRONICS\", \"priority\": 10}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 6}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 14}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Zara Home",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ZaraHome-Logo.png",
        "product_url": "https://www.zarahome.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ZaraHome-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 7}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 4}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "ChicMe",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Chicme-Logo.png",
        "product_url": "https://www.chicme.com/?country=MX&utm_language=es&utm_currency=MXN&utm_source=google&utm_medium=124556224764&utm_campaign=shaorui?gclid=Cj0KCQiAm5ycBhCXARIsAPldzoXrPvW8OrXVwpytEcnsJTOSExqQeXSVGK4ioiFJQlR0oDiCtLYceygaAlVFEALw_wcB",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Chicme-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 18}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Farfetch",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FarFetch-Logo.png",
        "product_url": "https://ad.admitad.com/g/3trillr7uy9f46dd94d9ca133c7202/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FarFetch-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"TOP_FASHION\", \"priority\": 14}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Vans",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Vans-Logo.png",
        "product_url": "https://www.vans.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Vans-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 11}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Juguetrón",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Juguetron-Logo2.png",
        "product_url": "https://www.juguetron.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Juguetron-Bg.jpeg",
        "priority_categories": "[{\"category\": \"KIDS\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Rosegal",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Rosegal-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYO",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Rosegal-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Oakley",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Oakley-Logo.png",
        "product_url": "https://redirect.viglink.com?u=http%3A%2F%2Foakley.com&key=31ff06970f0752ebe54fa15ba9279c30",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Oakley-Bg.jpeg",
        "priority_categories": "[{\"category\": \"EYEWEAR\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Free The Rabbit",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FreeTheRabbit-Logo.png",
        "product_url": "https://freetherabbit.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FreeTheRabbit-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 9}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Crocs",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Crocs-Logo.png",
        "product_url": "https://crocsmexico.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Crocs-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 10}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Kipling",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Kipling-Logo.png",
        "product_url": "https://kiplingmexico.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Kipling-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Adidas",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Adidas-Logo.png",
        "product_url": "https://adidas.prf.hn/click/camref:1100loTih",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Adidas-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 2}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 16}, {\"category\": \"SPORTING_GOODS\", \"priority\": 6}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 2}, {\"category\": \"GENERAL\", \"priority\": 5}, {\"category\": \"SPORTS\", \"priority\": 2}, {\"category\": \"STORES\", \"priority\": 2}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Telmov",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Telmov-Logo.png",
        "product_url": "https://telmov.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Telmov-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 26}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Volaris",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Volaris-Logo.png",
        "product_url": "https://www.volaris.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Volaris-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ibero Star",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/IberoStar-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYM",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/IberoStar-Bg.png",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 14}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Despegar",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Despegar-Logo.png",
        "product_url": "https://track.flexlinkspro.com/g.ashx?foid=156314.1009818.4611686018427492069&trid=1286321.202908&foc=16&fot=9999&fos=5",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Despegar-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Suburbia",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Suburbia-Logo.png",
        "product_url": "https://www.suburbia.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Suburbia-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"MENS_FASHION\", \"priority\": 5}, {\"category\": \"DEPARTMENT_STORE\", \"priority\": 6}, {\"category\": \"TOP_FASHION\", \"priority\": 13}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Martí",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Marti-Logo.png",
        "product_url": "https://www.marti.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Marti-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 13}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 18}, {\"category\": \"SPORTING_GOODS\", \"priority\": 3}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 10}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"SPORTS\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Marriot",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Marriot-Logo.png",
        "product_url": "https://prf.hn/click/camref:1011lpmyB/creativeref:1100l77252",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Marriot-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Abercrombie & Fitch",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Abercrombie&Fitch-Logo.png",
        "product_url": "https://www.abercrombie.com/shop/wd",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Abercrombie&Fitch-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 25}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"KIDS\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Momiji",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Momiji-Logo.png",
        "product_url": "https://www.momijibeauty.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Momiji-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 1}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Petco",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Petco-Logo.png",
        "product_url": "https://www.petco.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Petco-Bg.jpeg",
        "priority_categories": "[{\"category\": \"PETS\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Flexi",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Flexi-Logo.png",
        "product_url": "https://www.flexi.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Flexi-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 1}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Office Depot",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/OfficeDepot-Logo.png",
        "product_url": "https://www.officedepot.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/OfficeDepot-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_AND_FURNITURE\", \"priority\": 6}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"ELECTRONICS\", \"priority\": 15}, {\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Ventronic",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ventronic-Logo.png",
        "product_url": "https://ventronic.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ventronic-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 25}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Cinemex",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Cinemex-Logo.png",
        "product_url": "https://cinemex.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Cinemex-Bg.jpeg",
        "priority_categories": "[{\"category\": \"EVENTS\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Gap",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Gap-Logo.png",
        "product_url": "https://www.gap.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Gap-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 4}, {\"category\": \"MENS_FASHION\", \"priority\": 8}, {\"category\": \"KIDS\", \"priority\": 6}, {\"category\": \"TOP_FASHION\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Chedraui",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Chedraui-Logo.png",
        "product_url": "https://ad.soicos.com/-1l0a",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Chedraui-Bg.jpeg",
        "priority_categories": "[{\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Skechers",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sketchers-Logo.png",
        "product_url": "https://www.skechers.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sketchers-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 6}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 6}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Luuna",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Luuna-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=23202&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Luuna-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 12}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 9}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Péndulo",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Pendulo-Logo.png",
        "product_url": "https://pendulo.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Pendulo-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 17}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Chop Chop Bikes",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ChopChopBikes-Logo.png",
        "product_url": "https://chopchopbikes.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/ChopChopBikes-Bg.jpeg",
        "priority_categories": "[{\"category\": \"SPORTING_GOODS\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"SPORTS\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Cuidado Con El Perro",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/CuidadoConElPerro-Logo.png",
        "product_url": "https://www.cuidadoconelperro.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/CuidadoConElPerro-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 1}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 19}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 14}, {\"category\": \"MENS_FASHION\", \"priority\": 2}, {\"category\": \"TOP_FASHION\", \"priority\": 1}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Banggood",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/BangGood-Logo.png",
        "product_url": "https://www.jdoqocy.com/click-100572922-12637573",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/BangGood-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"SHOPPING\", \"priority\": 5}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 15}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"ELECTRONICS\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Amazon.com.mx",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/AmazonMX-Logo.png",
        "product_url": "https://www.amazon.com.mx/?&_encoding=UTF8&tag=nelo02-20&linkCode=ur2&linkId=cba34c16c731c5e5349f7d3932505538&camp=1789&creative=9325%E2%80%9D%3ENeloOTT%3C/a%3E",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Amazon-Bg.png",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 7}, {\"category\": \"SHOPPING\", \"priority\": 1}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 2}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"ZERO_APR\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 29}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"PETS\", \"priority\": 4}, {\"category\": \"ZERO_APR_LIMITED\", \"priority\": 1}, {\"category\": \"APP_ONLY\", \"priority\": 40}, {\"category\": \"REFERRAL_PRODUCT\", \"priority\": 40}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Casetify",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Casetify-Logo.png",
        "product_url": "https://ad.soicos.com/-1hXH",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Casetify-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Mercado Libre",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Mercado+Libre-Logo.png",
        "product_url": "https://www.mercadolibre.com.mx/?hide_psmb=false",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/MercadoLibre-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 13}, {\"category\": \"ACCESSORIES\", \"priority\": 20}, {\"category\": \"ELECTRONICS\", \"priority\": 12}, {\"category\": \"SHOPPING\", \"priority\": 2}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 1}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 10}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 30}, {\"category\": \"GENERAL\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Farmacia San Pablo",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FarmaciasSanPablo-Logo.png",
        "product_url": "https://www.farmaciasanpablo.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/FarmaciasSanPablo-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 3}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Newchic",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/NewChic-Logo.png",
        "product_url": "https://ad.admitad.com/g/0i4jszvwip055e0d931b3442850f04",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/NewChic-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 20}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Nike",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Nike-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=32219&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Nike-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 4}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"SPORTING_GOODS\", \"priority\": 1}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 2}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 4}, {\"category\": \"SPORTS\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Victoria's Secret",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/VictoriasSecret-Logo.png",
        "product_url": "https://ad.soicos.com/-1oE8",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/VictoriasSecret-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"BEAUTY\", \"priority\": 30}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "High Street",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/HighStreet-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=29483&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/HighStreet-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 14}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 13}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Destinia",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Destinia-Logo.png",
        "product_url": "https://clk.tradedoubler.com/click?p=305424&a=3254049&g=24788700",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Destinia-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 10}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Gaia",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Gaia-Logo.png",
        "product_url": "https://www.gaiadesign.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Gaia-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_AND_FURNITURE\", \"priority\": 2}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Pandora",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Pandora-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=22293&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Pandora-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 5}, {\"category\": \"ACCESSORIES\", \"priority\": 6}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ajolotito",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ajolotito-Logo.png",
        "product_url": "https://ajolotito.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ajolotito-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 31}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 32}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Apple",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Apple-Logo.png",
        "product_url": "https://apple.sjv.io/c/3217621/435278/7614",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Apple-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 16}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 9}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Converse",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Converse-Logo.png",
        "product_url": "https://sovrn.co/jp2y6hg",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Converse-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 7}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Stradivarius",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Stradivarius-Logo.png",
        "product_url": "https://clk.tradedoubler.com/click?p=304144&a=3254049&g=24730734",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Stradivarius-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 25}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 18}, {\"category\": \"TOP_FASHION\", \"priority\": 16}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Geekbuying",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Geekbuying-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYN",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Geekbuying-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 14}, {\"category\": \"ELECTRONICS\", \"priority\": 27}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Zara",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Zara-Logo.png",
        "product_url": "https://www.zara.com/mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Zara-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 6}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 8}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 1}, {\"category\": \"MENS_FASHION\", \"priority\": 5}, {\"category\": \"TOP_FASHION\", \"priority\": 6}, {\"category\": \"GENERAL\", \"priority\": 27}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Oraimo",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Oraimo-Logo.png",
        "product_url": "https://oraimo.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Oraimo-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 16}, {\"category\": \"ELECTRONICS\", \"priority\": 31}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "carter’s",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/carters-Logo.png",
        "product_url": "https://ad.soicos.com/-1lFJ",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/carters-Bg.jpeg",
        "priority_categories": "[{\"category\": \"KIDS\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Kiwi",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Kiwi-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYL",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Kiwi-Bg.jpeg",
        "priority_categories": "[{\"category\": \"TRAVEL\", \"priority\": 16}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Light in the box",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Lightinthebox-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYS",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Lightinthebox-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Julio",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Julio-Logo.png",
        "product_url": "https://julio.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Julio-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 15}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 4}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "TC Digital",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TCDigital-Logo.png",
        "product_url": "https://tcdigital.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/TCDigital-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 22}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Dresslily",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Dresslily-Logo.png",
        "product_url": "https://ad.soicos.com/-1hXJ",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Dresslily-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 17}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 21}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Ankershop",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ankershop-Logo.png",
        "product_url": "https://amzn.to/3q5FW5A",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Ankershop-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 19}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Aldo",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Aldo-Logo.png",
        "product_url": "https://www.aldoshoes.com/mx/es_MX",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Aldo-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 18}, {\"category\": \"ACCESSORIES\", \"priority\": 21}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Natura",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Natura-Logo.png",
        "product_url": "https://www.natura.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Natura-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 2}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Guess",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Guess-Logo.png",
        "product_url": "https://ad.soicos.com/-1oEc",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Guess-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 7}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 1}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 9}, {\"category\": \"MENS_FASHION\", \"priority\": 14}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Sears",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sears-Logo.png",
        "product_url": "https://ad.soicos.com/-1l9j",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Sears-Bg.jpeg",
        "priority_categories": "[{\"category\": \"DEPARTMENT_STORE\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Forever 21",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Forever21-Logo.png",
        "product_url": "https://forever21.com.mx",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Forever21-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 8}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 7}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 2}, {\"category\": \"MENS_FASHION\", \"priority\": 6}, {\"category\": \"TOP_FASHION\", \"priority\": 8}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Levi’s",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Levis-Logo.png",
        "product_url": "https://www.levi.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Levis-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 5}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 16}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 21}, {\"category\": \"MENS_FASHION\", \"priority\": 10}, {\"category\": \"TOP_FASHION\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Udemy",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Udemy-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYp",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Udemy-Bg.jpeg",
        "priority_categories": "[{\"category\": \"EVENTS\", \"priority\": 5}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Uyu Beauty",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/UyuBeauty-Logo.png",
        "product_url": "https://uyubeauty.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/UyuBeauty-Bg.jpeg",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 4}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Huawei",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Huawei-Logo.png",
        "product_url": "https://ad.soicos.com/-1hYK",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Huawei-Bg.jpeg",
        "priority_categories": "[{\"category\": \"ELECTRONICS\", \"priority\": 18}, {\"category\": \"TOP_ELECTRONICS\", \"priority\": 11}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Nespresso",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Nespresso-logo.png",
        "product_url": "https://www.nespresso.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Nespresso-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 14}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 11}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 30}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Innvictus",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Innvictus-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=51377&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Innvictus-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 14}, {\"category\": \"SPORTING_GOODS\", \"priority\": 5}, {\"category\": \"TOP_FOOTWEAR\", \"priority\": 13}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"SPORTS\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Bodega Aurrera",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Bodegaaurrera-Logo.png",
        "product_url": "https://ad.soicos.com/-1iOX",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Bodegaaurrera-Bg.jpeg",
        "priority_categories": "[{\"category\": \"HOME_GOODS\", \"priority\": 4}, {\"category\": \"ELECTRONICS\", \"priority\": 15}, {\"category\": \"GROCERIES\", \"priority\": 3}, {\"category\": \"TOP_HOME_GOODS\", \"priority\": 5}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 30}, {\"category\": \"TOP_MERCHANTS\", \"priority\": 14}, {\"category\": \"GENERAL\", \"priority\": 17}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"APP_ONLY\", \"priority\": 40}, {\"category\": \"STORES\", \"priority\": 30}, {\"category\": \"OFFLINE_MERCHANTS\", \"priority\": 1}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Mango",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Mango-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=22869&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/merchant-products/Mango-Bg.jpeg",
        "priority_categories": "[{\"category\": \"FASHION\", \"priority\": 16}, {\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 11}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 20}, {\"category\": \"MENS_FASHION\", \"priority\": 13}, {\"category\": \"TOP_FASHION\", \"priority\": 7}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Waldo's Dólar Mart",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Waldos-Logo.png",
        "product_url": "https://waldos.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Waldos-Bg.png",
        "priority_categories": "[{\"category\": \"HOME_AND_FURNITURE\", \"priority\": 15}, {\"category\": \"DEPARTMENT_STORE\", \"priority\": 15}, {\"category\": \"KIDS\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 13}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Lush",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Lush-Logo.png",
        "product_url": "https://lush.mx/ ",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Lush-Bg.png",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"BEAUTY\", \"priority\": 2}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Privalia",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Privalia-Logo.png",
        "product_url": "https://privalia.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Privalia-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"KIDS\", \"priority\": 15}, {\"category\": \"DEPARTMENT_STORE\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Loly In The Sky",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/LolyInTheSky-Logo.png",
        "product_url": "https://www.lolyinthesky.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Loly-Bg.png",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Bissu",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Bissu-Logo.png",
        "product_url": "https://bissu.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Bissu-Bg.png",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Bimba y Lola",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/BimbayLola-Logo.png",
        "product_url": "https://www.awin1.com/cread.php?awinmid=36604&awinaffid=1023164",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Bimba-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Andrea",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Andrea-Logo.png",
        "product_url": "https://mx.andrea.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Andrea-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Benetton",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Benetton-Logo.png",
        "product_url": "https://mx.benetton.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Benetton-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"KIDS\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "C&A",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/C%26A-Logo.png",
        "product_url": "https://www.cyamoda.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/C%26A-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"KIDS\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Cherish",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Cherish-Logo.png",
        "product_url": "https://www.cherish.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Cherish-Bg.png",
        "priority_categories": "[{\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Envía Flores",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/EnviaFlores-Logo.png",
        "product_url": "https://www.enviaflores.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/EnviaFlores-Bg.png",
        "priority_categories": "[{\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Famsa",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Famsa-Logo.png",
        "product_url": "https://www.famsa.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Famsa-Bg.png",
        "priority_categories": "[{\"category\": \"DEPARTMENT_STORE\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Lefties",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Lefties-Logo.png",
        "product_url": "https://www.lefties.com/mx/en/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Lefties-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": false,
        "credit_limit": 10000.000
    },
    {
        "name": "Lumen",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Lumen-Logo.png",
        "product_url": "https://lumen.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Lumen-Bg.png",
        "priority_categories": "[{\"category\": \"DEPARTMENT_STORE\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Meibi",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Meibi-Logo.png",
        "product_url": "https://meibi.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Meibi-Bg.png",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Nuestro Secreto",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/NuestroSecreto-Logo.png",
        "product_url": "https://nuestrosecreto.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/NuestroSecreto-Bg.png",
        "priority_categories": "[{\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "PlátanoMelón",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/PlatanoMelon-Logo.png",
        "product_url": "https://www.platanomelon.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/PlatanoMelon-Bg.png",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "PriceShoes",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/PriceShoes-Logo.png",
        "product_url": "https://www.priceshoes.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/PriceShoes-Bg.png",
        "priority_categories": "[{\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Romwe",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Romwe-Logo.png",
        "product_url": "https://sovrn.co/5fmyx1o",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Romwe-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"KIDS\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Shasa",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Shasa-Logo.png",
        "product_url": "https://www.shasa.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Shasa-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"KIDS\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Urban Outfitters",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/UrbanOutfitters-Logo.png",
        "product_url": "https://mx.urbanoutfitters.com/es-mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/UrbanOutfitters-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"KIDS\", \"priority\": 15}, {\"category\": \"HOME_AND_FURNITURE\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Vopero",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Vopero-Logo.png",
        "product_url": "https://vopero.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Vopero-Bg.png",
        "priority_categories": "[{\"category\": \"ALL_WOMENS_FASHION\", \"priority\": 15}, {\"category\": \"ALL_MENS_FASHION\", \"priority\": 15}, {\"category\": \"ACCESSORIES\", \"priority\": 15}, {\"category\": \"FOOTWEAR\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"STORES\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "WestElm",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/WestElm-Logo.png",
        "product_url": "https://www.westelm.com.mx/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/WestElm-Bg.png",
        "priority_categories": "[{\"category\": \"HOME_AND_FURNITURE\", \"priority\": 15}, {\"category\": \"GENERAL\", \"priority\": 31}]",
        "visible": true,
        "credit_limit": 10000.000
    },
    {
        "name": "Yuya",
        "icon_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Yuya-Logo.png",
        "product_url": "https://yuyatiendaoficial.com/",
        "background_url": "https://nelo-api.s3.us-east-2.amazonaws.com/static/biller-products/Yuya-Bg.png",
        "priority_categories": "[{\"category\": \"GENERAL\", \"priority\": 31}, {\"category\": \"HEALTH_AND_WELLNESS\", \"priority\": 15}, {\"category\": \"BEAUTY\", \"priority\": 30}]",
        "visible": true,
        "credit_limit": 10000.000
    }
]

for (let i = 0; i < merchants.length; i++) {
    merchants[i].priority_categories = JSON.parse(merchants[i].priority_categories);
}

function getDateAfterXDays(x) {
    const date = new Date()
    date.setDate(date.getDate() + x)

    const day = date.getDate()
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
}

let dollarUSLocale = Intl.NumberFormat('en-US');
let totalCreditAmount = 15000
let totalCashCreditAmount = 5000



let totalCredit = document.querySelector('.credit-container a:nth-child(2)')
totalCredit.innerText = `$${dollarUSLocale.format(totalCreditAmount)}`

let totalCash = document.querySelector('.withdraw-amt a:nth-child(2)')
totalCash.innerText = `$${dollarUSLocale.format(totalCashCreditAmount)}`


// TOP MERCHANTS FILTER
const merchants_top = [];
for (let i = 0; i < merchants.length; i++) {
    let merchant = merchants[i];
    for (let j = 0; j < merchant.priority_categories.length; j++) {
        let prodCategory = merchant.priority_categories[j];
        if (prodCategory.category === "TOP_MERCHANTS") {
            merchants_top.push(merchant);
        }
    }
}

//returns the merchant object when clicking on grid
let selectedMerchant = ""

function showMerchantGrid(element) {
    const index = element.getAttribute('data-index');
    const merchant = merchants_top[index];
    selectedMerchant = merchant
    console.log(selectedMerchant);
    seeMerchant(this)
    return merchant
}

let selectedMerchantFromList = ""

function showMerchantList(element) {
    const index = element.getAttribute('data-index');
    const merchant = merchants[index];
    selectedMerchantFromList = merchant
    console.log(selectedMerchantFromList);
    sideListMerchant(this)
    return merchant
}

// TOP MERCHANTS GIRD
const merchantContainer = document.getElementById("merchant-grid-container");
for (let i = 0; i < Math.min(15, merchants_top.length); i++) {

    const gridItem = document.createElement("div");
    gridItem.className = "grid-merchants";
    gridItem.setAttribute('data-index', i)

    gridItem.onclick = function () {
        showMerchantGrid(this);
    };

    const img = document.createElement("img");
    img.src = merchants_top[i].icon_url;
    img.alt = merchants_top[i].name;
    gridItem.appendChild(img);

    const merchantName = document.createElement("span")
    merchantName.innerText = merchants_top[i].name
    merchantName.style.fontSize = '9px'
    merchantName.style.marginTop = '8px'
    merchantName.style.whiteSpace = 'nowrap';
    merchantName.style.overflow = 'hidden';
    merchantName.style.textOverflow = 'ellipsis';
    merchantName.style.width = '80%';
    gridItem.appendChild(merchantName);

    gridItem.style.display = 'flex'
    gridItem.style.flexDirection = 'column'
    gridItem.style.textAlign = 'center'

    merchantContainer.appendChild(gridItem);
}


// this creates the side screen slider
const phoneScreen = document.querySelector('.phone-screen');
const coverDiv = document.createElement('div');
coverDiv.className = 'slide-cover';
phoneScreen.appendChild(coverDiv);

//*********************************//
// second cover div
const sideCover = document.querySelector('.slide-cover');
const secondCoverDiv = document.createElement('div');
secondCoverDiv.className = 'second-slide-cover';

//********************************//

function showCoverScreen() {
    const coverScreen = document.querySelector('.slide-cover')
    requestAnimationFrame(() => {
        coverScreen.style.left = '0';
    });
}

function showSecondCoverScreen() {
    const secondCoverScreen = document.querySelector('.second-slide-cover')
    console.log(secondCoverScreen)
    requestAnimationFrame(() => {
        secondCoverScreen.style.left = '0%';
    });

}

function removeCoverScreen() {
    const coverScreen = document.querySelector('.slide-cover')
    requestAnimationFrame(() => {
        coverScreen.style.left = '100%';
        setTimeout(function () {
            coverScreen.replaceChildren()
            individualMerchantInfo.replaceChildren()
            paymentPlanDiv.replaceChildren()
        }, 400)
    });
}

function removeSecondCoverScreen() {
    const coverScreen = document.querySelector('.second-slide-cover')
    const secondScreen = document.querySelector('.all-merchants-screen')
    requestAnimationFrame(() => {
        coverScreen.style.left = '100%';
        setTimeout(function () {
            coverScreen.replaceChildren()
        }, 300)
    });
}

// all merchants side screen here
const allMerchantsDiv = document.createElement('div')
allMerchantsDiv.className = 'all-merchants-screen'
allMerchantsDiv.innerHTML = `
    <div>
        <div class="side-screen-top-nav">
            <img onclick="removeCoverScreen(this)" class="back-arrow" src="https://elasticbeanstalk-us-east-1-276538999374.s3.amazonaws.com/outline-arrow_back-24px+(1).png">
            <span>Shop with Nelo</span>
        </div>
    </div>
    `
const allMerchantListDiv = document.createElement('div')
allMerchantListDiv.style.marginTop = '35px'

for (let i = 0; i < 100; i++) {

    const eachMerchantDiv = document.createElement("div")
    eachMerchantDiv.className = 'merchant-list-div'
    eachMerchantDiv.style.display = 'flex'
    eachMerchantDiv.setAttribute('data-index', i)
    eachMerchantDiv.onclick = function () {
        showMerchantList(this)
    }
    eachMerchantDiv.innerHTML = `
    <img onclick="sideListMerchant(this)" class="list-merchant-images" src="${merchants[i].icon_url}">
    <div class="each-merchant-list">
    <span>${merchants[i].name}</span>
    <span>${merchants[i].priority_categories[0]['category'].toLowerCase().replace(/_/g, " ")}</span>
    </div>
    `
    allMerchantListDiv.appendChild(eachMerchantDiv)
}
allMerchantsDiv.appendChild(allMerchantListDiv)

function showAllMerchants() {
    coverDiv.appendChild(allMerchantsDiv)
    showCoverScreen()

}

//***
// show individual merchant info

const individualMerchantInfo = document.createElement('div')
individualMerchantInfo.style.height = '10000px'
individualMerchantInfo.style.padding = '20px'

function seeMerchant() {
    individualMerchantInfo.innerHTML = `
    <div>
        <div class="side-screen-top-nav">
            <img onclick="removeCoverScreen(this)" class="back-arrow" src="https://elasticbeanstalk-us-east-1-276538999374.s3.amazonaws.com/outline-arrow_back-24px+(1).png">
            <span style="font-size: 24px;">${selectedMerchant.name}</span>
        </div>
    </div>
    <div class="individual-merchant-card">
        <div class="top-card">
            <div class="icon-name">
                <img  class="merchant-card-icon" src="${selectedMerchant.icon_url}">
                <div class="name-description">
                    <span style="font-size: 18px">${selectedMerchant.name}</span>
                    <span>Pay in up to 4 installments</span>
                </div>
            </div>
         <img style="height: 40px" src="https://elasticbeanstalk-us-east-1-276538999374.s3.amazonaws.com/Group+405.png">
        </div>
        <div class="bottom-card-info">
            <div class="name-description">
                <span style="font-size: 18px">$${dollarUSLocale.format(totalCreditAmount)}</span>
                <span>Purchase power</span>
            </div>
            <div class="name-description">
               <span style="font-size: 18px; color: #067BF2">7% to 15%</span>
               <span style="text-align: right">Financing fee</span>
            </div>
        </div>
    </div>
    
<div class="credit-request-box">
    <span>Purchase amount</span>
    <div>
     <span>$ </span><input class="loan-request-amt" type="number" placeholder="0.00">
    </div>
</div>
<div class="credit-request-confirtation-button">
    <button onclick="decreaseTotalLimit(this)">Continue</button>
</div>
    `
    coverDiv.appendChild(individualMerchantInfo);
    showCoverScreen();
}

function sideListMerchant() {
    individualMerchantInfo.innerHTML = `
    <div>
        <div class="side-screen-top-nav">
            <img onclick="removeSecondCoverScreen(this)" class="back-arrow" src="https://elasticbeanstalk-us-east-1-276538999374.s3.amazonaws.com/outline-arrow_back-24px+(1).png">
            <span style="font-size: 24px;">${selectedMerchantFromList.name}</span>
        </div>
    </div>
    <div class="individual-merchant-card">
        <div class="top-card">
            <div class="icon-name">
                <img  class="merchant-card-icon" src="${selectedMerchantFromList.icon_url}">
                <div class="name-description">
                    <span style="font-size: 18px">${selectedMerchantFromList.name}</span>
                    <span>Pay in up to 4 installments</span>
                </div>
            </div>
         <img style="height: 40px" src="https://elasticbeanstalk-us-east-1-276538999374.s3.amazonaws.com/Group+405.png">
        </div>
        <div class="bottom-card-info">
            <div class="name-description">
                <span style="font-size: 18px">$${dollarUSLocale.format(totalCreditAmount)}</span>
                <span>Purchase power</span>
            </div>
            <div class="name-description">
               <span style="font-size: 18px; color: #067BF2">7% to 15%</span>
               <span style="text-align: right">Financing fee</span>
               <span style="text-align: right">Financing fee</span>
            </div>
        </div>
    </div>
    
<div class="credit-request-box">
    <span>Purchase amount</span>
    <div>
     <span>$ </span><input class="loan-request-amt" type="number" placeholder="0.00">
    </div>
</div>
<div class="credit-request-confirtation-button">
    <button>Confirm</button>
</div>
    `
    sideCover.appendChild(secondCoverDiv)
    secondCoverDiv.appendChild(individualMerchantInfo);
    showSecondCoverScreen();
}


let borrowedAmt = 0
let noFundsDiv = document.createElement('div')

noFundsDiv.innerHTML =
    `
        <div>
            <span>You don't have enough funds. Please select a lower amount that is within your credit limit.</span>
        </div>`
noFundsDiv.className = "noFunds"

let paymentPlanDiv = document.createElement('div')
paymentPlanDiv.className = 'choose-your-plan'
paymentPlanDiv.innerHTML =
    `        <div class="inside-payment-plan">
            <span>Choose your payment plan</span>
        </div>`



function selectedPlan(element) {
    let updateBackground = element;
    updateBackground.style.border = '1px solid #067BF2';
    console.log(updateBackground);
    individualMerchantInfo.appendChild(confirmButton)
}

let confirmButton = document.createElement('div')
confirmButton.innerHTML =
    `
    <div class="credit-request-confirtation-button">
    <button onclick="removeCoverScreen(this)">confirm</button>
</div>
    `

let inFourDues = getDateAfterXDays(7*4)
let inTwoDues = getDateAfterXDays(7*2)
function decreaseTotalLimit(element){
    borrowedAmt = document.querySelector('.loan-request-amt').value

    if(borrowedAmt <= 0 ){

    }
    else if(totalCreditAmount - borrowedAmt <= 0){

        individualMerchantInfo.appendChild(noFundsDiv)
        requestAnimationFrame(() => {
            noFundsDiv.style.left = '0';
        });
        setTimeout(function() {
            noFundsDiv.style.left = '100%'
            individualMerchantInfo.removeChild(noFundsDiv);
        }, 4000);
    }else {
        console.log(borrowedAmt)
        totalCreditAmount = totalCreditAmount - borrowedAmt
        totalCredit.innerText = `$${dollarUSLocale.format(totalCreditAmount)}`
        console.log(totalCreditAmount)

        let paymentOptions = document.createElement('div')

        paymentOptions.innerHTML =
            `
        <div onclick="selectedPlan(this)" class="individual-payment-option">
        <div>
            <div class="top-of-option">
                <a>4 installments</a>
            </div>    
            </div>
            <div class="bottom-of-option">
            <span>4 payments of $${(borrowedAmt / 4).toFixed(2)}</span>
             <div class="date">
            <a>Due every two weeks until ${inFourDues}</a>
            </div>
            </div>          
        </div>
        
        <div onclick="selectedPlan(this)" class="individual-payment-option">
        <div>
            <div class="top-of-option">
                <a>2 installments</a>
            </div>    
            </div>
            <div class="bottom-of-option">
            <span>2 payments of $${(borrowedAmt / 2).toFixed(2)}</span>
             <div class="date">
            <a>Due every two weeks until ${inTwoDues}</a>
            </div>
            </div>     
                
        </div>
        
    </div>      
            `

        paymentPlanDiv.appendChild(paymentOptions)
        individualMerchantInfo.appendChild(paymentPlanDiv)

    }

}


