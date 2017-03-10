# Code Breaker on SKYUX

A code-breaking game written in TypeScript for Angular 2 using the
[SKYUX](https://developer.blackbaud.com/skyux2) platform.

## How to use

Clone the repo. Then, install the node dependencies.

```bash
git clone https://github.com/tiy-curtissimo/skyux-spa-code-breaker.git
cd skyux-spa-code-breaker
npm install
```

## The Branches

These are the different braches you can view to see the development of
the applciation in its different stages. Check out a branch and serve
the SKYUX application. Make sure to stop serving the SKYUX application
between branch checkouts. You can also run the tests to make sure
everything's stable.

```bash
git checkout «branch name»
skyux test # Optional, but good to do
skyux serve
```

* **master**: This README.
* **empty**: The empty SKYUX application.
* **models**: The models that drive the application.
* **complete**: Adding in the Angular 2 stuff render the application.
