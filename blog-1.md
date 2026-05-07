# Understanding `any` vs `unknown` in TypeScript

When I first started learning TypeScript, I used the `any` type a lot because it felt easy. It allows any kind of value without showing errors. But later I realized that using `any` too much removes one of the biggest benefits of TypeScript, which is type safety.

## Why `any` is called a “type safety hole”

The `any` type disables TypeScript checking. Once a variable becomes `any`, TypeScript stops protecting us from mistakes.

Example:

```ts
let value: any = "Hello";

value.toFixed(2);
```

Here, toFixed() only works on numbers, but TypeScript will not show any error because the variable is any. This can cause runtime errors in real projects.

That is why developers call any a “type safety hole.” It breaks the safety system of TypeScript.

Why unknown is safer

The unknown type is a safer alternative because TypeScript forces us to check the type before using it.

Example:
```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Here, TypeScript does not allow string methods directly until we confirm the value is actually a string.

This makes the code safer and reduces unexpected bugs.

What is type narrowing?

Type narrowing means checking a variable’s type before using it. TypeScript then “narrows” the type into something more specific.

Example:
```ts
function print(value: unknown) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }

  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}
```

In this example:

Inside the first block, TypeScript knows value is a number.
Inside the second block, TypeScript knows value is a string.

This process is called type narrowing.

### Conclusion

Using any may feel faster at the beginning, but it removes the main advantage of TypeScript. On the other hand, unknown keeps the program safer by forcing proper type checking. In large applications, this helps reduce bugs and makes the code more reliable.
