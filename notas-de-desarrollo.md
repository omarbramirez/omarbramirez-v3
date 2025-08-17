▶ la configuración ´i18n´ en ´next.config.js´ se deprecó desde la versión 13.

▶ if we are using Typescript and npm Negotiatior, we must `npm install --save @types/negotiator` » this package contains type definitions for negotiator.

▶ When using features from next-intl in Server Components, the relevant configuration is read from a central module that is located at i18n/request.ts 

**` matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'`** =>
1. *`((?!...).*)`* » lookhead negativo » haz match con cualquier cosa que no comience con las rutas especificadas dentro del paréntesis.
2. *`.*\\..*`* » Excluye archivos con punto (por ejemplo: `/favicon.ico`, `/robots.txt`)
3. *`.*`* »  seguido de cualquier cosa

**'use client'** => se utiliza para indicar que un archivo o componente debe ser renderizado del lado del cliente (client-side rendering, CSR) » acceso al estado local, eventos del DOM, hooks de React que dependen del cliente (useState, useEffect, useContext, etc.).

**`lg:flex`** => sistema de utilidades de Tailwind CSS, y es una clase de utilidad responsiva que aplica el comportamiento display: flex solo a partir del breakpoint "lg" (large) hacia arriba.

**`py-`** => abreviatura para "padding vertical", es decir, aplica padding (espaciado interno) en los ejes Y, o sea arriba (padding-top) y abajo (padding-bottom) de un elemento.

1) **`className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'`** => `w-11/12` » Define el ancho del elemento como el 91.666667% del contenedor (11/12 partes).


**Desestructuración de objetos** => extrae directamente esas propiedades como variables individuales para usarlas cómodamente dentro del cuerpo de la función.

```
{infoList.map(({ icon, iconDark, title, description }, index) => (
  <li key={index}>
    {/* contenido */}
  </li>
))}

//es equivalente a:

infoList.map((item, index) => {
  const icon = item.icon;
  const iconDark = item.iconDark;
  const title = item.title;
  const description = item.description;
  // usar icon, iconDark, title, description aquí
});
```

**Web3Forms** => `useForm()` de react-hook-form no mira solo los `name` de HTML; debes usar `register` para que la librería “escuche” los valores:

```
<input
  type="text"
  placeholder={t('form.name')}
  {...register("name", { required: true })}
  className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
/>
```

**`clearTimeout` dentro del `return` del `useEffect`** => como patrón de limpieza (cleanup) para evitar problemas cuando el componente se desmonta o cuando el estado isSuccess cambia antes de que el temporizador termine.

1. Cancela cualquier timer previo si isSuccess cambia antes de que termine el anterior
2. Evita memory leaks o intentos de actualizar el estado en un componente desmontado.
3. Es un patrón estándar en React para efectos con temporizadores.

```
useEffect(() => {
  if (isSuccess) {
    const timer = setTimeout(() => setIsSuccess(false), 3000);

    return () => clearTimeout(timer); // cleanup
  }
}, [isSuccess, setIsSuccess]);

```

**Operadores lógicos `||` y `&&`** => En JavaScript, el && tiene mayor precedencia que ||.

```
if (
  (localStorage.theme === 'dark') ||
  ( (!('theme' in localStorage)) && window.matchMedia('(prefers-color-theme:dark)').matches )
)
// Si en localStorage.theme existe y es exactamente "dark",
→ entra directamente al if y activa isDarkMode.
// Si NO existe la propiedad "theme" en localStorage y
el navegador informa que el usuario prefiere dark mode (prefers-color-theme: dark)
```

**Tipado de `setIsDarkMode()`** => Puede recibir un booleano directamente, o una función que a su vez recibe un booleano y devuelve otro booleano, y que actualizará el estado del componente.

```
interface NavbarProps {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
// Dispatch es un tipo genérico de React que representa una función que recibe un argumento y dispara una acción.

// SetStateAction<T> puede ser: Un valor directo de tipo T, en este caso boolean O una función que recibe el estado anterior (prevState) y retorna el nuevo estado. setIsDarkMode() puede ser (true) o (prev => !prev).
```

**Arrow function en el onClick `setIsDarkMode(prev => !prev)`** => `!prev` invierte el estado: si era true pasa a false, y viceversa. Toma el estado anterior y devuélveme su inverso, luego actualiza el estado con ese valor.

cost anomally detection



## back up

```
            {/* {infoList.map(({ icon, iconDark, titleKey, descriptionKey }, index) => (
              <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                <Image src={isDarkMode ? iconDark : icon} alt={t(titleKey)} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700 font-EB_Garamond dark:text-white'>{t(titleKey)}</h3>
                <p className='text-gray-600 text-sm font-IBM_Plex_Sans dark:text-white'>{t(descriptionKey)}</p>
              </li>
            ))
            } */}
```


**Tipado `t: (key: string, values?: Record<string, string | number | Date>) => string;`** => 


**Tipados específicos que implementamos en light-rays.tsx** => 

**How to use a proxy in Next.js** =>