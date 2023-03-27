// conditional *good
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// type assertion, *good*
const bodyThree = document.querySelector('body') as HTMLBodyElement;
bodyThree.style.background = 'yellow';

// HTMLElement, *good*
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'any value';
input.focus();

//non-null assertion (!) *not good*
const bodyTwo = document.querySelector('body')!;
bodyTwo.style.background = 'green';
