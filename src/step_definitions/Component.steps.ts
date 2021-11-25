import { Given, Then, When } from '@cucumber/cucumber'
import { Actor, Check } from '@serenity-js/core'
import { HomePage } from '../page-objects/home.page'
import { Click, isVisible } from '@serenity-js/protractor'
import { ButtonPage } from '../page-objects/button.page'



Given('{actor} is at the app', (actor: Actor) => {})

When('{pronoun} want to select for {string}', async (actor: Actor, component: string) => {
  switch (component) {
    case 'Button':

     Check.whether(HomePage.button, isVisible()).andIfSo(
        Click.on(HomePage.button))

     Check.whether(ButtonPage.customButton, isVisible()).andIfSo(
        Click.on(ButtonPage.customButton)) 
      
     Check.whether(ButtonPage.backHomeButton, isVisible()).andIfSo(
        Click.on(ButtonPage.backHomeButton))
      break
    case 'Calendar':
       Check.whether(HomePage.calendar, isVisible()).andIfSo(
         Click.on(HomePage.calendar))
      Check.whether(ButtonPage.backHomeButton, isVisible()).andIfSo(
        Click.on(ButtonPage.backHomeButton))
      break
  }
})

Then('{pronoun} is able to see the component displayed', async (actor: Actor) => {
  Check.whether(ButtonPage.backHomeButton, isVisible()).andIfSo(
    Click.on(ButtonPage.backHomeButton)
  )
})
