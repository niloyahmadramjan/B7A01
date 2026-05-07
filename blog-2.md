***How Generics Help Build Reusable and Type-Safe Code***

Generics are one of the most powerful features in TypeScript. They help us write reusable code without losing type safety.

Before learning generics, I often had to write similar functions multiple times for different data types. Generics solve this problem in a clean way.

Problem without Generics

Example:

```ts
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

Both functions do almost the same thing. The only difference is the type.

This creates unnecessary duplicate code.

Using Generics

With generics, we can write one reusable function.

Example:

```ts
function getValue<T>(value: T): T {
  return value;
}
```

Now we can use different types:

```ts
getValue<string>("Hello");
getValue<number>(100);
getValue<boolean>(true);
```

The function stays reusable while TypeScript still keeps everything type-safe.

Generics with Arrays

Generics are also useful when working with arrays.

Example:

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

Usage:

```ts
getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(["a", "b", "c"]);
```

TypeScript automatically understands the return type based on the data passed into the function.

Why Generics are Important

Generics help developers:

Write reusable code
Reduce duplication
Keep strong type safety
Improve code readability
Build flexible components and utilities

They are heavily used in modern libraries and frameworks like React.

### Conclusion

Generics make TypeScript more powerful by allowing functions, classes, and components to work with different types while still keeping strict type checking. They help developers write cleaner, reusable, and scalable code.
