---
################## Banner  ##################
banner:
  bg_image: "images/backgrounds/banner.jpg"
  title : "The development of technological solutions"
  content : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum voluptatem enim
            quibusdam a necessitatibus! Adipisci culpa inventore harum optio vitae totam aliquam, iusto minus quo hic ipsam."
            
  # button primary
  button_solid:
    enable : true
    label : "Explore Us"
    link : "about/"

  # button outline
  button_outline:
    enable : false
    label : "Contact Us"
    link : "contact/"
 
################## about ##################
about:
  enable: true
  image : "images/about/about.jpg"
  # content supports markdown, make sure to give enough space, otherwise markdown will not work properly
  content : "

  ## We are here to always <br> help you

  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi obcaecati earum quia accusamus quaerat suscipit sit saepe amet explicabo.


  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quod placeat eius dolorum cumque
  neque fugiat. Praesentium consequatur beatae eum quibusdam deleniti vero repellat numquam molestiae labore
  repellendus enim tempore laborum alias aut ex
  "
  button:
    enable : true
    label : "know more"
    link : "about/"

################## cta ##################
cta:
  enable: true
 
################## testimonial ##################
testimonial:
  enable : true
  title : "What People Say?"
  testimonial_item:
    # testimonial item loop
    - name : "John Doe"
      image : "images/testimonial/client-1.jpg" # image size 100px * 100px
      designation : "Web Developer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel
              illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat"
              
    # testimonial item loop
    - name : "Jinat Rin"
      image : "images/testimonial/client-2.jpg" # image size 100px * 100px
      designation : "UI/UX Designer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel
              illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat! Veritatis, modi. Laudantium
              provident deleniti earum voluptas delectus, labore dolor dolorem amet expedita."
              
    # testimonial item loop
    - name : "Mark Din"
      image : "images/testimonial/client-3.jpg" # image size 100px * 100px
      designation : "Web Developer"
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis voluptate modi sunt placeat in vel
              illo dolorem, atque maxime voluptates optio fugit iure cum ipsa quo quaerat! Veritatis, modi."

 
################## Service ##################
service:
  enable : true
  title : "Our Services"
  service_item:
    # Service item loop
    - title : "Creative Illustration"
      icon : "ti-vector" # here we use themefy icon pack : https://themify.me/themify-icons
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias"
      
    # Service item loop
    - title : "Graphics Design"
      icon : "ti-palette" # here we use themefy icon pack : https://themify.me/themify-icons
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias"
      
    # Service item loop
    - title : "UI/UX Design"
      icon : "ti-layout" # here we use themefy icon pack : https://themify.me/themify-icons
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias"
      
    # Service item loop
    - title : "Web Development"
      icon : "ti-world" # here we use themefy icon pack : https://themify.me/themify-icons
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias"
      
    # Service item loop
    - title : "Database Management"
      icon : "ti-server" # here we use themefy icon pack : https://themify.me/themify-icons
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias"
      
    # Service item loop
    - title : "Cloud Service"
      icon : "ti-palette" # here we use themefy icon pack : https://themify.me/themify-icons
      content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nisi aut cumque pariatur repellendus repellat debitis molestias"

 
################## Clients logo slider ##################
clients_logo:
  enable : true
---
