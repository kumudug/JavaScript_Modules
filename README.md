JavaScript_Modules
==================

## 1. ES5 Modules (Revealing Module Pattern)
----------------------------------------
<br />
### Two Major Patterns

 1. Revealing Module Pattern - Singleton  
      
 2. Revealing Module Pattern - Constructor  
    - Supports more than one instance

### Features  

 > Function scoping provides encapsulationi  
  
 > Add one value to global scope per module  
  
 > Public API and private implementatio seperate  
  
 > No dependancy management  
  
 > Pure javascript that works in modern browsers

<br />
## 2. Module Formats and Loaders
--------------------------------
<br />
Formats - Syntax to define a module (Ex: AMD, CommonJS)

Loaders - Executes the syntax (Ex: RequireJS, SystemJS)

### Module Formats

1. AMD - Asynchronous Module Definition
    - Non native format. Not directly supported by javascript
    - Mostly used for loading moduels in browsers

2. CommonJS
    - Non native format. Not directly supported by javascript
    - Mostly used in serverside javascript (Node)
    - Still possible to use in browser (Using a loader like SystemJS)

3. UMD - Universal Module Definition
    - Non native format. Not directly supported by javascript
    - A single format that tries to be compatible with both above formats

4. System.register
    - Non native format. Not directly supported by javascript
    - A format that's supported by SystemJS

5. ES2015 Module Format
    - Native format.


