(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return __webpack_require__(6462)}])},6462:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Home}});var jsx_runtime=__webpack_require__(5893),head=__webpack_require__(9008),head_default=__webpack_require__.n(head),classes_CustomImageProps=class{createImage(){return(0,jsx_runtime.jsx)("img",{className:"custom-image",src:this.path,alt:this.description,width:this.width,height:this.height,onClick:this.onClick})}getKey(){return this.key}setKey(key){this.key=key}getOnClick(){return this.onClick}setOnClick(onclick){this.onClick=onclick}addClassName(name){this.additionalClassNames.push(name)}getAdditionalClassNames(){return this.additionalClassNames}getDescriptionShown(){return this.isDescriptionShown}showDescription(){this.isDescriptionShown=!0}hideDescription(){this.isDescriptionShown=!1}getPath(){return this.path}getWidth(){return this.width}getHeight(){return this.height}getDescription(){return this.description}constructor(path,description,width,height,isDescriptionShown=!1){this.path=path,this.description=description,this.width=width,this.height=height,this.isDescriptionShown=isDescriptionShown,this.additionalClassNames=[],this.key=Math.round(4.7*Math.random()+5.3*Math.random()),this.onClick=()=>{}}};let CustomImage=props=>{let image=props.createImage(),classNames=Array.from(new Set(props.getAdditionalClassNames()));classNames.push("custom-image-container");let className=classNames.join(" "),key=props.getKey();return(0,jsx_runtime.jsx)("div",{className:className,children:image},key)};var classes_CustomImagesCarouselProps=class{getImagesProps(){return this.imagesProps}getImages(){return this.imagesProps.map((imageProps,index)=>(imageProps.setKey(index),imageProps.hideDescription(),imageProps.addClassName("embla__slide"),CustomImage(imageProps)))}addImage(image){this.imagesProps.push(image)}removeImage(image){let index=this.imagesProps.indexOf(image);index<0||this.imagesProps.slice(index,1)}constructor(imagesProps){this.imagesProps=imagesProps}},react=__webpack_require__(7294),embla_carousel_react_esm=__webpack_require__(5585),embla_carousel_autoplay_esm=__webpack_require__(2074);let CustomImagesCarouselComponent=props=>{let images=props.getImages(),[viewportRef,emblaApi]=(0,embla_carousel_react_esm.Z)({loop:!0,skipSnaps:!1},[(0,embla_carousel_autoplay_esm.Z)()]),scrollPrev=(0,react.useCallback)(()=>{emblaApi&&emblaApi.scrollPrev()},[emblaApi]),scrollNext=(0,react.useCallback)(()=>{emblaApi&&emblaApi.scrollNext()},[emblaApi]),DotButton=param=>{let{selected,onClick}=param;return(0,jsx_runtime.jsx)("button",{className:"embla__dot ".concat(selected?"is-selected":""),type:"button",onClick:onClick})},[selectedIndex,setSelectedIndex]=(0,react.useState)(0),[scrollSnaps,setScrollSnaps]=(0,react.useState)([]),scrollTo=(0,react.useCallback)(index=>emblaApi&&emblaApi.scrollTo(index),[emblaApi]),onSelect=(0,react.useCallback)(()=>{emblaApi&&setSelectedIndex(emblaApi.selectedScrollSnap())},[emblaApi,setSelectedIndex]);return(0,react.useEffect)(()=>{emblaApi&&(onSelect(),setScrollSnaps(emblaApi.scrollSnapList()),emblaApi.on("select",onSelect))},[emblaApi,setScrollSnaps,onSelect]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{id:"custom-images-outer-carousel",className:"embla",children:[(0,jsx_runtime.jsx)("div",{className:"embla__viewport",ref:viewportRef,children:(0,jsx_runtime.jsx)("div",{id:"custom-images-inner-carousel",className:"embla__container",children:images})}),(0,jsx_runtime.jsx)("button",{className:"embla__prev",onClick:scrollPrev,children:(0,jsx_runtime.jsx)("svg",{id:"custom-images-carousel-button-arrow-left",className:"embla__button__svg",viewBox:"137.718 -1.001 366.563 644",children:(0,jsx_runtime.jsx)("path",{d:"M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z"})})}),(0,jsx_runtime.jsx)("button",{className:"embla__next",onClick:scrollNext,children:(0,jsx_runtime.jsx)("svg",{id:"custom-images-carousel-button-arrow-right",className:"embla__button__svg",viewBox:"0 0 238.003 238.003",children:(0,jsx_runtime.jsx)("path",{d:"M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z"})})})]}),(0,jsx_runtime.jsx)("div",{className:"embla__dots",children:scrollSnaps.map((_,index)=>(0,jsx_runtime.jsx)(DotButton,{selected:index===selectedIndex,onClick:()=>scrollTo(index)},index))})]})};var react_dom=__webpack_require__(3935);let Popup=param=>{let{show,onClose}=param,[isBrowser,setIsBrowser]=(0,react.useState)(!1);(0,react.useEffect)(()=>{setIsBrowser(!0)},[]);let handleCloseClick=e=>{e.preventDefault(),onClose()},popupContent=show?(0,jsx_runtime.jsx)("div",{className:"popup-overlay",onClick:handleCloseClick,children:(0,jsx_runtime.jsxs)("div",{className:"popup",onClick(e){e.stopPropagation()},children:[(0,jsx_runtime.jsx)("div",{className:"popup-header"}),(0,jsx_runtime.jsx)("div",{className:"popup-body"})]})}):null;if(!isBrowser)return null;{let popupRoot=document.getElementById("popup-root");return popupRoot?react_dom.createPortal(popupContent,popupRoot):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{})}};var classes_Allergen=class{createImageProps(){return new classes_CustomImageProps(this.iconPath,this.name,100,100)}getName(){return this.name}getIconPath(){return this.iconPath}constructor(name,iconPath){this.name=name,this.iconPath=iconPath}},classes_AllergensCollectionProps=class{getImages(){return this.allergens.map((allergen,index)=>{let imageProps=allergen.createImageProps();return imageProps.setKey(index),imageProps.hideDescription(),imageProps.addClassName("allergen-icon"),imageProps.setOnClick(this.onClick),CustomImage(imageProps)})}getAllergens(){return this.allergens}constructor(allergens,onClick){this.allergens=allergens,this.onClick=onClick}},classes_CustomLabelProps=class{getTitle(){return this.title}getWeight(){return this.weight}getExpirationDate(){return this.expirationDate}getIngredients(){return this.ingredients}getNutrionalValuesNames(){return this.nutritionalValues}constructor(title,weight,expiringDate,ingredients,nutritionalValues){this.title=title,this.weight=weight,this.expirationDate=expiringDate,this.ingredients=ingredients,this.nutritionalValues=nutritionalValues}};let AllergensCollectionComponent=props=>{let images=props.getImages();return(0,jsx_runtime.jsx)("section",{id:"allergens-icons-container",children:images})},CustomLabel=props=>{let name=props.getTitle(),weight=props.getWeight().toString()+"g",expirationDate=props.getExpirationDate(),_ingredients=props.getIngredients(),nutritionalValues=props.getNutrionalValuesNames(),ingredientsTitle=_ingredients[0]+":";_ingredients.shift();let ingredients=_ingredients.join(", ")+".",nutritionalValuesTable=(0,jsx_runtime.jsx)("table",{children:(0,jsx_runtime.jsx)("tbody",{children:nutritionalValues.map((tableRow,index)=>(0,jsx_runtime.jsx)("tr",{children:tableRow.split(",").map((_value,_index)=>(0,jsx_runtime.jsx)("td",{className:_index*index==0?"custom-label-values-strong":"",children:_value},_index+1e4*Math.random()))},index*Math.random()))})});return(0,jsx_runtime.jsxs)("section",{className:"custom-label-container",children:[(0,jsx_runtime.jsxs)("section",{className:"custom-label-title-container",children:[(0,jsx_runtime.jsx)("section",{className:"custom-label-values-strong custom-label-title-product-name",children:name}),(0,jsx_runtime.jsxs)("section",{className:"custom-label-title-product-main-info",children:[(0,jsx_runtime.jsx)("p",{children:weight}),(0,jsx_runtime.jsx)("p",{children:expirationDate})]})]}),(0,jsx_runtime.jsxs)("section",{className:"custom-label-ingredients-container",children:[(0,jsx_runtime.jsx)("p",{className:"custom-label-values-strong custom-label-ingredients-title",children:ingredientsTitle}),(0,jsx_runtime.jsx)("p",{className:"custom-label-ingredients",children:ingredients})]}),(0,jsx_runtime.jsx)("section",{className:"custom-label-nutritional-values-container",children:nutritionalValuesTable})]})};var languages_Arabic=class{constructor(){this.getFlagIconName=()=>"arb.png",this.getTranslatedSelectLanguageString=()=>"اختر لغة",this.getTranslatedLabel=()=>CustomLabel(new classes_CustomLabelProps("فوسيلي N.98",500,"10-08-2023",["مكونات","دقيق القمح القاسي","ماء"],["متوسط ​​القيم الغذائية, , 100g, 85g, %AR/85g","قوة, kJ/kcal, 1521/359, 1293/305, 15%","الدهون, g, 2.0, 1.7, 2%","منها الأحماض الدهنية المشبعة, g, 0.5, 0.4, 2%","الكربوهيدرات, g, 71.2, 60.5, 23%","من أي أنواع السكريات, g, 3.5, 3.0, 3%","ألياف, g, 3.0, 2.6, -","البروتينات, g, 12.5, 10.6, 21%","ملح, g, 0.013, 0.011, 0%"])),this.getTranslatedAllergens=setShowModal=>AllergensCollectionComponent(new classes_AllergensCollectionProps([new classes_Allergen("بيضة","../images/eggs.png"),new classes_Allergen("سمك","../images/fish.png"),new classes_Allergen("الرخويات","../images/shellfish.png"),new classes_Allergen("الغولتين","../images/gluten.png"),new classes_Allergen("المكسرات","../images/nuts.png")],event=>{setShowModal(!0),window.requestAnimationFrame(()=>{let popupBody=document.getElementsByClassName("popup-body")[0],selectedAllergen=event.nativeEvent.target,popupMainContent=selectedAllergen.cloneNode(!0),popupSecondaryContent=document.createElement("div");popupSecondaryContent.className="popup-secondary-content",popupSecondaryContent.innerHTML="<p>"+selectedAllergen.alt+"</p>",popupBody.innerHTML="",popupBody.appendChild(popupMainContent),popupBody.appendChild(popupSecondaryContent)})}))}},languages_English=class{constructor(){this.getFlagIconName=()=>"eng.png",this.getTranslatedSelectLanguageString=()=>"Select a language",this.getTranslatedLabel=()=>CustomLabel(new classes_CustomLabelProps("Fusilli N.98",500,"10-08-2023",["Ingredients","durum wheat semolina","water"],["AVERAGE NUTRITIONAL VALUES, , 100g, 85g, %AR/85g","ENERGY, kJ/kcal, 1521/359, 1293/305, 15%","FATS, g, 2.0, 1.7, 2%","of which SATURATED FATTY ACIDS, g, 0.5, 0.4, 2%","CARBOHYDRATES, g, 71.2, 60.5, 23%","of which SUGAR, g, 3.5, 3.0, 3%","FIBERS, g, 3.0, 2.6, -","PROTEINS, g, 12.5, 10.6, 21%","SALT, g, 0.013, 0.011, 0%"])),this.getTranslatedAllergens=setShowModal=>AllergensCollectionComponent(new classes_AllergensCollectionProps([new classes_Allergen("Eggs","../images/eggs.png"),new classes_Allergen("Fish","../images/fish.png"),new classes_Allergen("Shellfish","../images/shellfish.png"),new classes_Allergen("Gluten","../images/gluten.png"),new classes_Allergen("Nuts","../images/nuts.png")],event=>{setShowModal(!0),window.requestAnimationFrame(()=>{let popupBody=document.getElementsByClassName("popup-body")[0],selectedAllergen=event.nativeEvent.target,popupMainContent=selectedAllergen.cloneNode(!0),popupSecondaryContent=document.createElement("div");popupSecondaryContent.className="popup-secondary-content",popupSecondaryContent.innerHTML="<p>"+selectedAllergen.alt+"</p>",popupBody.innerHTML="",popupBody.appendChild(popupMainContent),popupBody.appendChild(popupSecondaryContent)})}))}},languages_French=class{constructor(){this.getFlagIconName=()=>"fr.png",this.getTranslatedSelectLanguageString=()=>"S\xe9lectionnez une langue",this.getTranslatedLabel=()=>CustomLabel(new classes_CustomLabelProps("Fusilli N.98",500,"10-08-2023",["Ingr\xe9dients","farine de bl\xe9 dur","eau"],["VALEURS NUTRITIONNELLES MOYENNES, , 100g, 85g, %AR/85g","\xc9NERGIE, kJ/kcal, 1521/359, 1293/305, 15%","GRAISSES, g, 2.0, 1.7, 2%","dont ACIDES GRAS SATUR\xc9S, g, 0.5, 0.4, 2%","GLUCIDES, g, 71.2, 60.5, 23%","dont SUCRES, g, 3.5, 3.0, 3%","FIBRES, g, 3.0, 2.6, -","PROT\xc9INES, g, 12.5, 10.6, 21%","SEL, g, 0.013, 0.011, 0%"])),this.getTranslatedAllergens=setShowModal=>AllergensCollectionComponent(new classes_AllergensCollectionProps([new classes_Allergen("Oeufs","../images/eggs.png"),new classes_Allergen("Poinsson","../images/fish.png"),new classes_Allergen("Palourdes","../images/shellfish.png"),new classes_Allergen("Gluten","../images/gluten.png"),new classes_Allergen("Noisettes","../images/nuts.png")],event=>{setShowModal(!0),window.requestAnimationFrame(()=>{let popupBody=document.getElementsByClassName("popup-body")[0],selectedAllergen=event.nativeEvent.target,popupMainContent=selectedAllergen.cloneNode(!0),popupSecondaryContent=document.createElement("div");popupSecondaryContent.className="popup-secondary-content",popupSecondaryContent.innerHTML="<p>"+selectedAllergen.alt+"</p>",popupBody.innerHTML="",popupBody.appendChild(popupMainContent),popupBody.appendChild(popupSecondaryContent)})}))}},languages_German=class{constructor(){this.getFlagIconName=()=>"de.png",this.getTranslatedSelectLanguageString=()=>"W\xe4hle eine Sprache",this.getTranslatedLabel=()=>CustomLabel(new classes_CustomLabelProps("Fusilli N.98",500,"10-08-2023",["Zutaten","hartweizenmehl","wasser"],["DURCHSCHNITTLICHE N\xc4HRWERTE, , 100g, 85g, %AR/85g","ENERGIE, kJ/kcal, 1521/359, 1293/305, 15%","FETTE, g, 2.0, 1.7, 2%","davon GES\xc4TTIGTE FETTS\xc4UREN, g, 0.5, 0.4, 2%","KOHLENHYDRATE, g, 71.2, 60.5, 23%","davon Zucker, g, 3.5, 3.0, 3%","FASERN, g, 3.0, 2.6, -","PROTEINE, g, 12.5, 10.6, 21%","SALZ, g, 0.013, 0.011, 0%"])),this.getTranslatedAllergens=setShowModal=>AllergensCollectionComponent(new classes_AllergensCollectionProps([new classes_Allergen("Ei","../images/eggs.png"),new classes_Allergen("Fische","../images/fish.png"),new classes_Allergen("Venusmuscheln","../images/shellfish.png"),new classes_Allergen("Gluten","../images/gluten.png"),new classes_Allergen("N\xfcsse","../images/nuts.png")],event=>{setShowModal(!0),window.requestAnimationFrame(()=>{let popupBody=document.getElementsByClassName("popup-body")[0],selectedAllergen=event.nativeEvent.target,popupMainContent=selectedAllergen.cloneNode(!0),popupSecondaryContent=document.createElement("div");popupSecondaryContent.className="popup-secondary-content",popupSecondaryContent.innerHTML="<p>"+selectedAllergen.alt+"</p>",popupBody.innerHTML="",popupBody.appendChild(popupMainContent),popupBody.appendChild(popupSecondaryContent)})}))}},languages_Italian=class{constructor(){this.getFlagIconName=()=>"ita.png",this.getTranslatedSelectLanguageString=()=>"Seleziona una lingua",this.getTranslatedLabel=()=>CustomLabel(new classes_CustomLabelProps("Fusilli N.98",500,"10-08-2023",["Ingredienti","semola di grano duro","acqua"],["VALORI NUTRIZIONALI MEDI, , 100g, 85g, %AR/85g","ENERGIA, kJ/kcal, 1521/359, 1293/305, 15%","GRASSI, g, 2.0, 1.7, 2%","di cui ACIDI GRASSI SATURI, g, 0.5, 0.4, 2%","CARBOIDRATI, g, 71.2, 60.5, 23%","di cui ZUCCHERI, g, 3.5, 3.0, 3%","FIBRE, g, 3.0, 2.6, -","PROTEINE, g, 12.5, 10.6, 21%","SALE, g, 0.013, 0.011, 0%"])),this.getTranslatedAllergens=setShowModal=>AllergensCollectionComponent(new classes_AllergensCollectionProps([new classes_Allergen("Uova","../images/eggs.png"),new classes_Allergen("Pesce","../images/fish.png"),new classes_Allergen("Molluschi","../images/shellfish.png"),new classes_Allergen("Glutine","../images/gluten.png"),new classes_Allergen("Noci","../images/nuts.png")],event=>{setShowModal(!0),window.requestAnimationFrame(()=>{let popupBody=document.getElementsByClassName("popup-body")[0],selectedAllergen=event.nativeEvent.target,popupMainContent=selectedAllergen.cloneNode(!0),popupSecondaryContent=document.createElement("div");popupSecondaryContent.className="popup-secondary-content",popupSecondaryContent.innerHTML="<p>"+selectedAllergen.alt+"</p>",popupBody.innerHTML="",popupBody.appendChild(popupMainContent),popupBody.appendChild(popupSecondaryContent)})}))}},languages_Japanese=class{constructor(){this.getFlagIconName=()=>"jp.png",this.getTranslatedSelectLanguageString=()=>"言語を選択",this.getTranslatedLabel=()=>CustomLabel(new classes_CustomLabelProps("フジッリ N.98",500,"10-08-2023",["材料","デュラム小麦粉","水"],["平均栄養価, , 100g, 85g, %AR/85g","パワー, kJ/kcal, 1521/359, 1293/305, 15%","太い, g, 2.0, 1.7, 2%","飽和脂肪酸, g, 0.5, 0.4, 2%","炭水化物, g, 71.2, 60.5, 23%","うち糖質, g, 3.5, 3.0, 3%","繊維, g, 3.0, 2.6, -","タンパク質, g, 12.5, 10.6, 21%","塩, g, 0.013, 0.011, 0%"])),this.getTranslatedAllergens=setShowModal=>AllergensCollectionComponent(new classes_AllergensCollectionProps([new classes_Allergen("卵","../images/eggs.png"),new classes_Allergen("魚","../images/fish.png"),new classes_Allergen("二枚貝","../images/shellfish.png"),new classes_Allergen("グルテン","../images/gluten.png"),new classes_Allergen("ナッツ","../images/nuts.png")],event=>{setShowModal(!0),window.requestAnimationFrame(()=>{let popupBody=document.getElementsByClassName("popup-body")[0],selectedAllergen=event.nativeEvent.target,popupMainContent=selectedAllergen.cloneNode(!0),popupSecondaryContent=document.createElement("div");popupSecondaryContent.className="popup-secondary-content",popupSecondaryContent.innerHTML="<p>"+selectedAllergen.alt+"</p>",popupBody.innerHTML="",popupBody.appendChild(popupMainContent),popupBody.appendChild(popupSecondaryContent)})}))}},Spanish=class{constructor(){this.getFlagIconName=()=>"esp.png",this.getTranslatedSelectLanguageString=()=>"Selecciona un idioma",this.getTranslatedLabel=()=>CustomLabel(new classes_CustomLabelProps("Fusilli N.98",500,"10-08-2023",["Ingredientes","harina de trigo duro","agua"],["VALORES NUTRICIONALES MEDIOS, , 100g, 85g, %AR/85g","ENERG\xcdA, kJ/kcal, 1521/359, 1293/305, 15%","GRASAS, g, 2.0, 1.7, 2%","de los cuales \xc1CIDOS GRASOS SATURADOS, g, 0.5, 0.4, 2%","CARBOHIDRATOS, g, 71.2, 60.5, 23%","de los AZ\xdaCARES, g, 3.5, 3.0, 3%","FIBRAS, g, 3.0, 2.6, -","PROTE\xcdNAS, g, 12.5, 10.6, 21%","SAL, g, 0.013, 0.011, 0%"])),this.getTranslatedAllergens=setShowModal=>AllergensCollectionComponent(new classes_AllergensCollectionProps([new classes_Allergen("Huevo","../images/eggs.png"),new classes_Allergen("Pez","../images/fish.png"),new classes_Allergen("Almejas","../images/shellfish.png"),new classes_Allergen("Gluten","../images/gluten.png"),new classes_Allergen("Nueces","../images/nuts.png")],event=>{setShowModal(!0),window.requestAnimationFrame(()=>{let popupBody=document.getElementsByClassName("popup-body")[0],selectedAllergen=event.nativeEvent.target,popupMainContent=selectedAllergen.cloneNode(!0),popupSecondaryContent=document.createElement("div");popupSecondaryContent.className="popup-secondary-content",popupSecondaryContent.innerHTML="<p>"+selectedAllergen.alt+"</p>",popupBody.innerHTML="",popupBody.appendChild(popupMainContent),popupBody.appendChild(popupSecondaryContent)})}))}},languages_LanguageSelector=class{getLanguage(){return this.language}getAllLanguages(){return[new languages_Italian,new languages_English,new languages_French,new languages_German,new Spanish,new languages_Japanese,new languages_Arabic]}constructor(languageSelector){if("ita"===languageSelector){this.language=new languages_Italian;return}if("eng"===languageSelector){this.language=new languages_English;return}if("fr"===languageSelector){this.language=new languages_French;return}if("de"===languageSelector){this.language=new languages_German;return}if("esp"===languageSelector){this.language=new Spanish;return}if("jp"===languageSelector){this.language=new languages_Japanese;return}if("arb"===languageSelector){this.language=new languages_Arabic;return}this.language=new languages_Italian}},next_router=__webpack_require__(1163),classes_NavbarButton=class{createButton(){return CustomImage(this.icon)}getIcon(){return this.icon}getIconPath(){return this.icon.getPath()}getOnClick(){return this.onClick}constructor(icon,onClick){this.icon=icon,this.onClick=onClick,this.icon.setOnClick(this.onClick),this.icon.addClassName("navbar-button")}},classes_CustomNavbarComponentProps=class{getButtons(){return this.buttons}constructor(buttons){this.buttons=buttons}};let CustomNavbarComponent=props=>{let buttons=props.getButtons();return(0,jsx_runtime.jsx)("section",{id:"navbar",children:buttons.map(navbarButton=>navbarButton.createButton())})};function Home(){var ref;let testProps=[,,,,];testProps.fill(new classes_CustomImageProps("/images/pasta.png","Test description",100,100));let carousel=CustomImagesCarouselComponent(new classes_CustomImagesCarouselProps(testProps)),[showModal,setShowModal]=(0,react.useState)(!1),router=(0,next_router.useRouter)(),languageURLString="string"==typeof router.query.lan?router.query.lan:(null===(ref=router.query.lan)||void 0===ref?void 0:ref.length)?router.query.lan[0]:"ita",languageSelector=new languages_LanguageSelector(languageURLString),language=languageSelector.getLanguage(),translatedLabel=language.getTranslatedLabel(),translatedAllergens=language.getTranslatedAllergens(setShowModal),languageSelectionButton=new classes_NavbarButton(new classes_CustomImageProps("/images/flags/"+language.getFlagIconName(),language.getTranslatedSelectLanguageString(),100,100),event=>{event.stopPropagation(),setShowModal(!0),window.requestAnimationFrame(()=>{let popupBody=document.getElementsByClassName("popup-body")[0],languageItem=event.nativeEvent.target;languageSelector.getAllLanguages().map(_language=>CustomImage(new classes_CustomImageProps("/images/flags/"+_language.getFlagIconName(),_language.getTranslatedSelectLanguageString(),100,100)));let popupMainContent=document.createElement("div");popupMainContent.innerHTML="";let popupSecondaryContent=document.createElement("div");popupSecondaryContent.className="popup-secondary-content",popupSecondaryContent.innerHTML="<p>"+languageItem.alt+"</p>",popupBody.innerHTML="",popupBody.appendChild(popupMainContent),popupBody.appendChild(popupSecondaryContent)})}),navbar=CustomNavbarComponent(new classes_CustomNavbarComponentProps([languageSelectionButton]));return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(head_default(),{children:[(0,jsx_runtime.jsx)("title",{children:"Pasta Smart Package"}),(0,jsx_runtime.jsx)("meta",{name:"description",content:"A sample website for an innovative smart packaging for pasta"}),(0,jsx_runtime.jsx)("link",{rel:"icon",href:"".concat("/pasta-smart-package","/favicon.ico")})]},1234),navbar,carousel,translatedLabel,translatedAllergens,(0,jsx_runtime.jsx)("div",{id:"popup-root",children:(0,jsx_runtime.jsx)(Popup,{show:showModal,onClose:()=>setShowModal(!1)})})]})}}},function(__webpack_require__){__webpack_require__.O(0,[741,774,888,179],function(){return __webpack_require__(__webpack_require__.s=8312)}),_N_E=__webpack_require__.O()}]);