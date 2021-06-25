// ratio scroll 25% visible and pop
const ratio = .25

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}



// REVEAL background
const backgroundOpacity = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-background')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(backgroundOpacity, options)
    document.querySelectorAll('.reveal-background').forEach(function (r) {

        observer.observe(r)

    })
})

// REVEAL background 2
const backgroundOpacity2 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-background-2')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(backgroundOpacity2, options)
    document.querySelectorAll('.reveal-background-2').forEach(function (r) {

        observer.observe(r)

    })
})





// REVEAL LEFT
const myScrollLeft = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-L')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollLeft, options)
    document.querySelectorAll('.reveal-L').forEach(function (r) {

        observer.observe(r)

    })
})

// REVEAL RIGHT
const myScrollRight = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-R')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollRight, options)
    document.querySelectorAll('.reveal-R').forEach(function (r) {

        observer.observe(r)

    })
})






// REVEAL TITLE LEFT
const myScrollLeftTitle = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-L--title')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollLeftTitle, options)
    document.querySelectorAll('.reveal-L--title').forEach(function (r) {

        observer.observe(r)

    })
})

// REVEAL TITLE RIGHT
const myScrollRightTitle = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-R--title')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollRightTitle, options)
    document.querySelectorAll('.reveal-R--title').forEach(function (r) {

        observer.observe(r)

    })
})








// REVEAL TITLE LEFT 2
const myScrollLeftTitle2 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-L--title-2')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollLeftTitle2, options)
    document.querySelectorAll('.reveal-L--title-2').forEach(function (r) {

        observer.observe(r)

    })
})

// REVEAL TITLE RIGHT 2
const myScrollRightTitle2 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-R--title-2')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollRightTitle2, options)
    document.querySelectorAll('.reveal-R--title-2').forEach(function (r) {

        observer.observe(r)

    })
})








// REVEAL TITLE LEFT 3
const myScrollLeftTitle3 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-L--title-3')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollLeftTitle3, options)
    document.querySelectorAll('.reveal-L--title-3').forEach(function (r) {

        observer.observe(r)

    })
})

// REVEAL TITLE RIGHT 3
const myScrollRightTitle3 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-R--title-3')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollRightTitle3, options)
    document.querySelectorAll('.reveal-R--title-3').forEach(function (r) {

        observer.observe(r)

    })
})










// REVEAL TITLE LEFT 4
const myScrollLeftTitle4 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-L--title-4')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollLeftTitle4, options)
    document.querySelectorAll('.reveal-L--title-4').forEach(function (r) {

        observer.observe(r)

    })
})

// REVEAL TITLE RIGHT 4
const myScrollRightTitle4 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-R--title-4')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollRightTitle4, options)
    document.querySelectorAll('.reveal-R--title-4').forEach(function (r) {

        observer.observe(r)

    })
})









// REVEAL POP
const myScrollPOP = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-POP')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollPOP, options)
    document.querySelectorAll('.reveal-POP').forEach(function (r) {

        observer.observe(r)

    })
})

// REVEAL POP 2
const myScrollPOP2 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('reveal-visible-POP-2')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(myScrollPOP2, options)
    document.querySelectorAll('.reveal-POP-2').forEach(function (r) {

        observer.observe(r)

    })
})








// Effect light SOCIAL NETWORK 

// light 01
const light01 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('effectLight01-visible')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(light01, options)
    document.querySelectorAll('.effectLight01').forEach(function (r) {

        observer.observe(r)

    })
})

// light 02
const light02 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('effectLight02-visible')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(light02, options)
    document.querySelectorAll('.effectLight02').forEach(function (r) {

        observer.observe(r)

    })
})

// light 03
const light03 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('effectLight03-visible')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(light03, options)
    document.querySelectorAll('.effectLight03').forEach(function (r) {

        observer.observe(r)

    })
})

// light 04 
const light04 = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('effectLight04-visible')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(light04, options)
    document.querySelectorAll('.effectLight04').forEach(function (r) {

        observer.observe(r)

    })
})







// SKILL BAR
const skillbar = function (entries, observer) {

    entries.forEach(function (entry) {

        if (entry.intersectionRatio > ratio) {

            entry.target.classList.add('valide')
            observer.unobserve(entry.target)

        }
    })
}

document.documentElement.classList.add('reveal-loaded')
window.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(skillbar, options)
    document.querySelectorAll('.invalide').forEach(function (r) {

        observer.observe(r)

    })
})


// EFFECT NAME TAG
// !<>-_\\/[]{}—=+*^?#________
class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '01101010';
      this.update = this.update.bind(this);
    }
  
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => this.resolve = resolve);
      this.queue = [];
  
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({
          from,
          to,
          start,
          end
        });
      }
  
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
  
    update() {
      let output = '';
      let complete = 0;
  
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let {
          from,
          to,
          start,
          end,
          char
        } = this.queue[i];
  
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
  
          output += `<span class="header-text-effect">${char}</span>`;
        } else {
          output += from;
        }
      }
  
      this.el.innerHTML = output;
  
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
  
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  
  }
  
  const phrases = ['FALVO Anthony', 'FALVO. Enterprise'];
  const el = document.querySelector('.textEffect');
  const fx = new TextScramble(el);
  let counter = 0;
  
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 4000);
    });
    counter = (counter + 1) % phrases.length;
  };
  
  next();












