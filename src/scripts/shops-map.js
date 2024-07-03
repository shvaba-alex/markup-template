import { debounce, unformatPhone } from './utils.js'

ymaps.ready(initShopMap)

class ShopsMap {
  defaultConfig = {
    map: {
      nodeId: 'shops-map',
      center: [52.815725, 24.626304],
      zoom: 7
    }
  }

  constructor(shops) {
    this.shops = shops

    this._init()
  }

  _init() {
    this._initYandexMap()
    this.createObjectManager()
    this._addEvents()
    this.map.geoObjects.add(this.objectManager)
  }

  _initYandexMap() {
    const mapConfig = this.defaultConfig.map
    this.map = new ymaps.Map(mapConfig.nodeId, mapConfig)

    this._paintCountryBorder()
  }

  _paintCountryBorder() {
    const belarus = ymaps.geoQuery(ymaps.regions.load('BY', { lang: 'ru' }))
    const regions = [
      {
        name: 'Гродненская область',
        options: {
          fillOpacity: '0.1',
          fillColor: '#1ab7d8',
          strokeColor: '#fa4d09'
        }
      },
      {
        name: 'Могилёвская область',
        options: {
          fillOpacity: '0.1',
          fillColor: '#1ab7d8',
          strokeColor: '#fa4d09'
        }
      },
      {
        name: 'Гомельская область',
        options: {
          fillOpacity: '0.1',
          fillColor: '#1ab7d8',
          strokeColor: '#fa4d09'
        }
      },
      {
        name: 'Витебская область',
        options: {
          fillOpacity: '0.1',
          fillColor: '#1ab7d8',
          strokeColor: '#fa4d09'
        }
      },
      {
        name: 'Минская область',
        options: {
          fillOpacity: '0.1',
          fillColor: '#1ab7d8',
          strokeColor: '#fa4d09'
        }
      },
      {
        name: 'Брестская область',
        options: {
          fillOpacity: '0.1',
          fillColor: '#1ab7d8',
          strokeColor: '#fa4d09'
        }
      }
    ]
    
    regions.forEach((region) => {
      belarus
        .search(`properties.hintContent = "${region.name}"`)
        .setOptions(region.options)
        .addToMap(this.map)
    })
  }

  createObjectManager() {
    this.objectManager = new ymaps.ObjectManager({
      clusterize: false,
      gridSize: 64,
      iconImageSize: [64, 64]
    })

    const objectManagerData = {
      type: 'FeatureCollection',
      features: []
    }

    this.shops.forEach((shop) => {
      objectManagerData.features.push({
        type: 'Feature',
        id: shop.id,
        geometry: { type: 'Point', coordinates: shop.coordinates },
        properties: {
          shopId: shop.id,
          balloonContentBody: this.getStoreBalloonContentBody(shop)
        },
        options: {
          iconLayout: 'default#image',
          isActive: false,
          iconImageHref: '/img/marker.svg'
        }
      })
    })

    this.objectManager.add(objectManagerData)
  }

  getStoreBalloonContentBody(store) {
    console.log(store)
    return `
            <div class="popover__inner store-popover">
                <span>${store.address}</span>
               
               <div>
                    <h4 class="store-popover__title">Режим работы</h4>
                    <span>${store.openingHours}</span>
               </div>
                
                <div>
                    <h4 class="store-popover__title">Телефон</h4>
                     ${store.phones.map(
                       (phone) => `<a href="tel:+${unformatPhone(phone)}">${phone}</a>`
                     )} 
                </div>
                
                <div>
                    <h4 class="store-popover__title">эл. почта</h4>
                    ${store.emails.map((email) => `<a href="mailto:${email}">${email}</a>`)}
                </div>
            </div>
        `
  }

  _addEvents() {
    window.addEventListener('hashchange', this.handleHashChange.bind(this))
  }

  handleHashChange(event) {}

  goToShop(shopId) {
    const shop = this.objectManager.objects.getById(shopId)

    this.map.panTo(shop.geometry.coordinates).then(() => this.map.setZoom(10))
  }

  filterShops(shopIds) {
    this.objectManager.setFilter(this.getFilterFunction(shopIds))
  }

  getFilterFunction(shopIds) {
    return function (obj) {
      return shopIds.includes(obj.properties.shopId)
    }
  }
}
