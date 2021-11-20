# Content Delivery Patterns in 2021

A Collection of solution patterns for \[web] content delivery.

## About

There is no perfect stack. There's always some risk mitigation and sacrifices to be made, and the decision is largely always going to be subjective. 

The stack isn't important, the ability to remain agile and adapt when it falls short is more important.

Day-0 choices are unlikely to be day-365 choices, and so on. Be willing to invest in something that will be thrown away to get a project to deliver value quickly. That value can be reinvested to evolve the underlying solution over time, but trying to make the perfect platform on day-0 is like trying to land a huge plane on a short runway.

Ops is key to survivability. 

## Base concepts

1. **Asset** is a piece of _static_ content delivered for the client
2. **Data** is a piece of _dynamic_ content delivered for, or from, the client
3. **App Logic** is presentation layer code, responsible for Application Experience (might be indistinguishable from business logic, in a small app)
4. **Business Logic** is code, responsible for applying business rules for the _data_ 

## Index

The patterns for content delivery

1. [Static website](./StaticWebsite.md)
2. Embedded content (frames, objects)
3. [CSR – Client side rendering](./ClientSideRendering.md)
4. SSR - Server side rendering
5. Content Delivery Network
6. Proxy
7. Gateway
8. [CDN – a Content Delivery network](./ContentDeliveryNetwork.md)

# Appendix

Some other important topics

1. Cross Site Content
2. Single Sign on