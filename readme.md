## Typescript Fluent Builder Live Templates

Live templates for TypeScript to create fluent builders and provide supporting templates.

### Templates

- `builder`

Is a basic builder template which can expanded.

```
export class $builderName$ {
    constructor(builderFunction: (builder: $builderName$) => void = (e) => e) {
        builderFunction(this);
    }

    build(): $entity$ {
        return {} as $entity$;
    }
}
```
- `withBuild`

TODO Provide additional information.