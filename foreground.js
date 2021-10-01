// import { languages } from './lang'


function executeScript(){
  console.log("hello")
    // x1 = 0, y1 = 0, x2 = 0, y2 = 0;
    const pos = window.scrollY
    let body = document.getElementsByTagName("BODY")[0]
    let js = document.getElementsByTagName("SCRIPT")[0]
    let layer_wrapper = document.createElement('div')
    let app_wrapper = document.createElement('div')
    let translate_res = document.createElement('div')
    let textArea_original = document.createElement('div')
    let textArea_translated = document.createElement('div')
    let textArea_details = document.createElement('div')
    textArea_original.contentEditable = "true"
    textArea_details.contentEditable = "true"

    textArea_details.classList.add("textArea-details")
    textArea_original.classList.add("text-area")
    textArea_translated.classList.add("text-area")

    textArea_original.appendChild(textArea_details)
    textArea_translated.appendCwhild(textArea_details)

    translate_res.appendChild(textArea_original)
    translate_res.appendChild(textArea_translated)
    translate_res.classList.add("translate_res")
    translate_res.style.display = "none"
    translate_res.style.zIndex= "134123454353452345234"
    
    let original_text = document.createElement('div')
    let translated_text = document.createElement('div')
    translated_text.classList.add("translated_text")
    original_text.classList.add("original_text")
    // translate_res.appendChild(original_text)
    // translate_res.appendChild(translated_text)


    app_wrapper.classList.add("app")
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d')

    let style_obj;

    let test = document.createElement('div')
    test.style.height = "100px"
    test.style.width= "100px"
    test.style.backgroundColor = "red"
    test.style.zIndex ="999999999999"
    test.classList.add("hello")
    
    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;
    var x1;
    var y1;
    var x2;
    var y2
    // var posX = 0 
    // var posY = 0
    layer_wrapper.classList.add('wrapper-9012')
    console.log(layer_wrapper)
    // console.log(languages)
    let selected_area = document.createElement('div')
    selected_area.classList.add("selected_area")
    // selected_area.style.backgroundColor = "transparent"
    selected_area.innerHTML = "<div class='resizers'>"+
        "<div class='resizer top-left'></div>"+
        "<div class='resizer top-right'></div>"+
        "<div class='resizer bottom-left'></div>"+
        "<div class='resizer bottom-right'></div>"+
    "</div>"
    let options_wrapper = document.createElement("DIV")
    options_wrapper.classList.add('wrapper-menu')
    


    let buttons_wrapper = document.createElement('button')
    let select_lang = document.createElement('select')
    let translation_lang = document.createElement('select')
    options_wrapper.appendChild(buttons_wrapper)
    options_wrapper.appendChild(select_lang)
    options_wrapper.appendChild(translation_lang)
    // options_wrapper.style.position = "absolute"
    options_wrapper.style.zIndex = 1232432433454325
    options_wrapper.style.display = "none"

    // select_lang.classList.add("lang")
    function generateLangOptions(elem){
      Object.keys(languages).map(lang =>{
        let option = document.createElement('option')
        option.value = lang
        option.innerHTML = lang
        // console.log(option)
        elem.appendChild(option)
      })
    }
    generateLangOptions(select_lang)
    generateLangOptions(translation_lang)
    // select_lang = translation_lang
    
    layer_wrapper.appendChild(translate_res)
    buttons_wrapper.innerHTML = "Translate"
    buttons_wrapper.classList.add('buttons')
    selected_area.style.display ="none"
    // buttons_wrapper.style.display = "none"
    
    if(!document.querySelector('.wrapper-9012')){
      console.log("sfasdfsd")
      app_wrapper.appendChild(layer_wrapper)
      app_wrapper.appendChild(selected_area)
      app_wrapper.appendChild(options_wrapper)
      app_wrapper.appendChild(translate_res)
      body.appendChild(app_wrapper)

    }


    
    function reCalc() {
        var x3 = Math.min(x1,x2);
        var x4 = Math.max(x1,x2);
        var y3 = Math.min(y1,y2);
        var y4 = Math.max(y1,y2);
        selected_area.style.left = x3 + 'px';
        selected_area.style.top = y3 + 'px';
        selected_area.style.width = x4 - x3 + 'px';
        selected_area.style.height = y4 - y3 + 'px';
        // console.log((x3 + y4-y3 + 20)+'px')
        options_wrapper.style.top = (y3 + y4-y3 + 20)+'px'
        options_wrapper.style.left = x3+'px'
       
        // console.log(x3,y3,x4,y4)
        clipGeneration(x3,y3,x4,y4)
    }
    layer_wrapper.onmousedown = function(e) {
        selected_area.style.display ="block"
        x1 = e.clientX;
        y1 = e.clientY;
        reCalc();
    };

    onmousemove = function(e) {
        // console.log("heloooooooo")
        x2 = e.clientX;
        y2 = e.clientY;
        reCalc();
    };


    
    selected_area.onmouseup = function(e) {
        // console.log("hiiiiii")
        // buttons_wrapper.style.display = "block"
        options_wrapper.style.display = "flex";
        options_wrapper.style.justifyContent = "space-between";
        selected_area.onmouseup = null
        layer_wrapper.onmousedown = null
        onmousemove = null
    };

    layer_wrapper.onmouseup = selected_area.onmouseup

    const clipGeneration = (x3,y3,x4,y4) =>{
        // console.log(x3,y3,x4,y4)
        top_left_x = (x3/window.innerWidth)*100
        top_left_y = (y3/window.innerHeight)*100


        top_right_x = ((x3+(x4-x3))/window.innerWidth)*100
        top_right_y = top_left_y

        bottom_right_x = top_right_x
        bottom_right_y = ((y3+(y4-y3))/window.innerHeight)*100

        bottom_left_x = top_left_x 
        bottom_left_y = bottom_right_y

        top_left = (x3/window.innerWidth)*100
        top_right = ((x3+(x4-x3))/window.innerWidth)*100
        bottom_right = ((y3+(y4-y3))/window.innerHeight)*100

        layer_wrapper.style.clipPath = `polygon(0 0, 0 100%, 
                                        ${top_left_x}% 100%, ${top_left_x}% ${top_left_y}%, 
                                        ${top_right_x}% ${top_right_y}%, ${bottom_right_x}% ${bottom_right_y}%,
                                        ${bottom_left_x}% ${bottom_left_y}%, ${bottom_left_x}% 100%, 
                                        100% 100%, 100% 0%)`

        // console.log(`polygon(0 0, 0 100%, 
        //     ${top_left_x}% 100%, ${top_left_x}% ${top_left_y}%, 
        //     ${top_right_x}% ${top_right_y}%, ${top_right}% ${top_right}%, '
        //     ${bottom_left_x}% ${bottom_left_y}%, ${bottom_left_y}% 100%, 
        //     100% 100%, 100% 0%)`)
    }

     var area_checker = new ResizeObserver( entries =>{
        for(let entry of entries){
          let translate_px = selected_area.style.transform
                          .replace("translate3d(", '')
                          .replace(")",'')
                          .split(',').map(x => parseInt(x.replace('px', '')))
            style_obj = {
                top: parseInt(selected_area.style.top.replace('px', ''))+translate_px[1],
                left: parseInt(selected_area.style.left.replace('px', ''))+translate_px[0],
                width: parseInt(selected_area.style.width.replace('px', '')) + parseInt(selected_area.style.left.replace('px', '')),
                height: parseInt(selected_area.style.height.replace('px', '')) + parseInt(selected_area.style.top.replace('px', '')),
            }
            options_wrapper.style.width = selected_area.style.width
            // console.log(style_obj)
            // buttons_wrapper.style.display = "none"
            // console.log({...Object.values(style_obj)})
            clipGeneration(style_obj.left,style_obj.top,style_obj.width,style_obj.height)
        }
    })

    // var pos_checker = new MutationObserver(entries => {
    //     console.log("hello")
    // })

    // pos_checker.observe(selected_area)

    function makeResizableDiv(div) {
        const element = document.querySelector(div);
        const resizers = document.querySelectorAll(div + ' .resizer')
        const minimum_size = 20;
        let original_width = 0;
        let original_height = 0;
        let original_x = 0;
        let original_y = 0;
        let original_mouse_x = 0;
        let original_mouse_y = 0;
        let obj_pos = {}
        for (let i = 0;i < resizers.length; i++) {
          const currentResizer = resizers[i];
          currentResizer.addEventListener('mousedown', function(e) {
            e.preventDefault()
            original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
            original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
            console.log("IMPORTANT")
            let pos = getCurrentPos(element)
            // console.log()
            console.log("hiiii",pos)
            original_x = pos[1];
            original_y = pos[0];
            obj_pos = {top: pos[0], left: pos[1]}
            original_mouse_x = e.pageX;
            original_mouse_y = e.pageY;
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
          })
          
          function resize(e) {
            if (currentResizer.classList.contains('bottom-right')) {
              const width = original_width + (e.pageX - original_mouse_x);
              const height = original_height + (e.pageY - original_mouse_y)
              if (width > minimum_size) {
                element.style.width = width + 'px'
              }
              if (height > minimum_size) {
                element.style.height = height + 'px'
              }
              // let new_style = {...element.style,...obj_pos}
              // console.log(new_style)
              // Object.assign(element.style , new_style)
              // element.style.top = original_x + 'px'
              // element.style.left = original_y + 'px'
              console.log(element.style.height, element.style.width, element.style.top, element.style.left)
              // console.log()
              // console.log(element.style.top)
              // console.log(element.style.left)
              // console.log(element.style.top,element.style.left )
              // clipGeneration(original_x,original_y, width-original_x, height-original_y)
            }
            else if (currentResizer.classList.contains('bottom-left')) {
              const height = original_height + (e.pageY - original_mouse_y)
              const width = original_width - (e.pageX - original_mouse_x)
              if (height > minimum_size) {
                element.style.height = height + 'px'
              }
              if (width > minimum_size) {
                element.style.width = width + 'px'
                element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
                // clipGeneration()
              }
            }
            else if (currentResizer.classList.contains('top-right')) {
              const width = original_width + (e.pageX - original_mouse_x)
              const height = original_height - (e.pageY - original_mouse_y)
              if (width > minimum_size) {
                element.style.width = width + 'px'
              }
              if (height > minimum_size) {
                element.style.height = height + 'px'
                element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
              }
            }
            else {
              const width = original_width - (e.pageX - original_mouse_x)
              const height = original_height - (e.pageY - original_mouse_y)
              if (width > minimum_size) {
                element.style.width = width + 'px'
                element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
              }
              if (height > minimum_size) {
                element.style.height = height + 'px'
                element.style.top = original_y + (e.pageY - original_mouse_y) + 'px'
                // clipGeneration(original_x, original_y, width_cur, height_cur)
              }             
            }
            
          }
          
          function stopResize() {
            window.removeEventListener('mousemove', resize)
          }
        }
      }

    function getCurrentPos(elem){
      let total_top =  parseInt(elem.style.top.replace('px','')); 
      let total_left = parseInt(elem.style.left.replace('px',''));
      let total_pos = {}
      // console.log(elem)
      // console.log(elem.style.hasOwnProperty('transform'))
      if(elem.style.hasOwnProperty('transform')){
        let translate_px = elem.style.transform
                          .replace("translate3d(", '')
                          .replace(")",'')
                          .split(',').map(x => x.replace('px', ''))
        let top = parseInt(elem.style.top.replace('px',''))
        let left = parseInt(elem.style.left.replace('px',''))
        // console.log(top, left)
        total_top  +=  parseInt(translate_px[1]) 
        total_left += parseInt(translate_px[0])
        
      }
      return [total_top,total_left]
    }

    area_checker.observe(selected_area)
    makeResizableDiv('.selected_area')



    function dragStart(e) {
        let resizers = document.querySelector('.resizers')
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
            } else {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
            }
            // console.log(e.target, resizers)
            if (e.target === resizers) {
                active = true;
            }
        }
    
        function dragEnd(e) {
          initialX = currentX;
          initialY = currentY;
    
          active = false;
        }
    
        function drag(e) {
          document.onmousemove = drag
        //   style_obj = {
        //     top: parseInt(selected_area.style.top.replace('px', '')),
        //     left: parseInt(selected_area.style.left.replace('px', '')),
        //     width: parseInt(selected_area.style.width.replace('px', '')) + parseInt(selected_area.style.left.replace('px', '')),
        //     height: parseInt(selected_area.style.height.replace('px', '')) + parseInt(selected_area.style.top.replace('px', '')),
        //   }
        
        
        // // console.log({...Object.values(style_obj)})
        let translate_px = selected_area.style.transform
                          .replace("translate3d(", '')
                          .replace(")",'')
                          .split(',').map(x => x.replace('px', ''))
        // console.log(translate_px)
          if(active) {
            
            e.preventDefault();
          
            if (e.type === "touchmove") {
              currentX = e.touches[0].clientX - initialX;
              currentY = e.touches[0].clientY - initialY;
            } else {
              currentX = e.clientX - initialX;
              currentY = e.clientY - initialY;
            }
    
            xOffset = currentX;
            yOffset = currentY;
    
            
            var top = parseInt(selected_area.style.top.replace('px', '')) + parseInt(translate_px[1])
            var left = parseInt(selected_area.style.left.replace('px', '')) + parseInt(translate_px[0])
            var width = parseInt(selected_area.style.width.replace('px', '')) + left
            var height = parseInt(selected_area.style.height.replace('px', '')) + top
            // console.log(parseInt(selected_area.style.top.replace('px', '')), parseInt(translate_px[0]), top)
            // console.log(parseInt(selected_area.style.left.replace('px', '')), parseInt(translate_px[1]), left)
            options_wrapper.style.top = top + parseInt(selected_area.style.height.replace('px',''))+ 20+ 'px'
            // console.log(width)
            options_wrapper.style.left = left+'px'
            clipGeneration(left, top, width, height)
            setTranslate(currentX, currentY, selected_area);
          }
        }
    
      function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
      }

    selected_area.addEventListener("mousedown", dragStart, false);
    selected_area.addEventListener("mouseup", dragEnd, false);
    selected_area.addEventListener("mousemove", drag, false);

    async function ocrAPI (file, params) {
      try {
        const response = await ocrSpace(file, params).then(response => response)
        console.log(response)
        return response
        
        // Using your personal token + base64 image + custom language
      } catch (error) {
        console.log(error)
      }
    }

    function azureTranslationAPI(message){
      var subscriptionKey = "80930d8bebad4751a3f4526123b808ec";
      var endpoint = "https://api.cognitive.microsofttranslator.com/";
      var location = "francecentral";

      axios({
          baseURL: endpoint,
          url: '/translate',
          method: 'post',
          headers: {
              'Ocp-Apim-Subscription-Key': subscriptionKey,
              'Ocp-Apim-Subscription-Region': location,
              'Content-type': 'application/json',
              // 'X-ClientTraceId': "12342342354314531543514"
          },
          params: {
              'api-version': '3.0',
              'from': languages[select_lang.value][1],
              'to': languages[translation_lang.value][1]
          },
          data: [{
              'text': message
          }],
          responseType: 'json'
      }).then(function(response){

          translate_res.style.display = "flex"
          translate_res.style.top = "200px"
          translate_res.style.animation= "width 0.7s ease-in-out"
          textArea_original.innerHTML = message
          textArea_translated.innerHTML = response.data[0].translations[0].text

      }).catch(err => console.log(err))
    }
      
      //Usage example:
     
    
    buttons_wrapper.addEventListener("click", async ()=>{
      let left = 0;
      let top = 0;
      let translate_px = selected_area.style.transform
      .replace("translate3d(", '')
      .replace(")",'')
      .split(',').map(x => x.replace('px', ''))

      if(translate_px != ""){
        left = parseInt(translate_px[0])
        top = parseInt(translate_px[1])
      }
      let area_pos = {
        x: parseInt(selected_area.style.left.replace('px',''))+(left),
        y: parseInt(selected_area.style.top.replace('px',''))+(top),
        height: parseInt(selected_area.style.height.replace('px','')),
        width: parseInt(selected_area.style.width.replace('px','')),
      }

        chrome.runtime.sendMessage({from:"script1",content:"screenshot"}, function(response){
            // let img
            // console.log(response)
            let apiKey = "a52a3b0ef388957"
            let canva = document.createElement('canvas')
            canva.classList.add("hithere")
            // Object.assign(canva.style, canvas_style)
            let ctx = canva.getContext('2d')
            let image = document.createElement('IMG')
            image.classList.add("hello")

            if (!window.chrome.runtime.lastError) {
              image.crossOrigin = "anonymous"
              image.src = response.complete
              image.onload = function(){
                canva.height = image.height
                canva.width = image.width
                ctx.drawImage(image, area_pos.x, area_pos.y, area_pos.width, area_pos.height , 0 , 0, area_pos.width, area_pos.height);
                let req_params = {
                  apiKey: apiKey,
                  language: languages[select_lang.value][0],
                  isOverlayRequired: true 
                }
                ocrAPI(canva.toDataURL("image/jpg"), req_params).then(response => {
                  console.log(response.data.ParsedResults[0].ParsedText)
                  azureTranslationAPI(response.data.ParsedResults[0].ParsedText)
                })
              }
              // document.body.appendChild(image)
              // console.log(canva.toDataURL())
            } else {
            console.log(window.chrome.runtime.lastError)
          }
        
      }); 
    })

    document.addEventListener("keyup", (event) => {
      if(event.key == "Escape" && !document.querySelector('wrapper-9012')) {
          body.removeChild(app_wrapper)
          selected_area.removeEventListener("mousemove", drag)
      }
    })

    select_lang.addEventListener("change", function(){
      console.log(select_lang.value)
    })
    
}
executeScript()