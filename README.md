# Facebook ConversionAPI & Browser Pixel

This library contains utility methods for Facebook ConversionAPI, Browser Pixel & PowerPixel.
It should be noted however that it requires you to have an already existing endpoint for the
ConversionAPI. 

## How to use with React (Next.js)
#### Installation
```
yarn add conversion@https://github.com/duma-lab/FB-Wrapper-Module 
```

#### Setup Provider Component
```typescript jsx
// app.tsx
export default function ContextProvider({ children }) {
      let FacebookEventProvider = ({children, config}) => <>{children}</>
      
      if(process.browser) {
        FacebookEventProvider = require('conversion/lib/cjs/react').FacebookEventProvider
      }
      // ...
        
      const config = {
        pixelId: 12737828729,
        apiKey: "conversion-url-your-api-key-here",
        testEventCode: "TEST029278",
        wrapperUrl: "/api/fb/wrapper"
      }   

      return (
        <FacebookEventProvider config={config}>
            {children}
        </FacebookEventProvider>
      )
}
``` 

#### Consumer Component
```typescript jsx
import { useFacebookEvents } from "conversion"
export default function MyComponent(){
    const facebookEvent = useFacebookEvents()
    
    useEffect(() => {
        facebookEvent.trackEvent({
            eventName: "PageView", 
            actionSource: ActionSource.WEBSITE
        })
    }, [])

}
```

#### General use
```typescript
// Create an instance of the class with the pixelId and test code
const fbEvents = new FacebookConversion(
                         config.pixelId,
                         config.testCode,
                     )
// Configure the apiKey and WrapperUrl for ConversionAPI
fbEvents.config(apiKey, wrapperUrl)
// Call init to initialize the instance
fbEvents.init()

// Track events using track
fbEvents.track({
    eventName, 
    actionSource, 
    userData, 
    customData
})
