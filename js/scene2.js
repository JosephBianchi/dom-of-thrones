function scene2() {
  stage = document.querySelector('#stage')
  stageImg = stage.querySelector('#stage-img')

  castle = document.querySelector('#castle')

  castleImgSrc = castle.getAttribute('src')
  stageImg.setAttribute('src', castleImgSrc)


  nedContainer = document.createElement('div')
  stage.append(nedContainer)
  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '10%'
  nedContainer.style.height = '37%'
  nedContainer.style.top = '55%'
  nedContainer.style.left = '25%'
  // nedContainer.style.border = '2px solid red'
  // nedContainer.style.background = 'yellow'

  ned = document.querySelector('#ned')
  nedContainer.append(ned)


  leather = document.querySelector('#leather-armour')
  nedContainer.append(leather)
  //
  // ned.style.border = '2px solid blue'
  // leather.style.border = '2px solid green'

  ned.style.width = '70%'

  ned.style.position = 'absolute'
  ned.style.top = 0
  leather.style.position = 'absolute'
  leather.style.bottom = 0



  joffContainer = document.createElement('div')
joffContainer.id = 'joff-container'
stage.append(joffContainer)
joffContainer.style.width = '8%'
joffContainer.style.position = 'absolute'
joffContainer.style.height = '31%'
joffContainer.style.top = '55%'
joffContainer.style.left = '55%'

joff = document.querySelector('#joffrey')
joffContainer.append(joff)
joff.style.width = '75%'
joff.style.position = 'absolute'
joff.style.left = '33%'

kingWardrobe = document.querySelector('#king')
joffContainer.append(kingWardrobe)
kingWardrobe.style.position = 'absolute'
kingWardrobe.style.bottom = 0

sword = document.querySelector('#sword')
stage.append(sword)
sword.style.position = 'absolute'
sword.style.top = '77%'
sword.style.left = '31%'
sword.style.height = '5%'

sword.style.transform = 'rotateY(150deg)'






  // Setup Stage

  // Setup Cast

  // Character 1

  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
