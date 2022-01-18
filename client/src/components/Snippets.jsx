class Language {
    constructor(name, extension, code, sampleCode) {
      this.name = name;
      this.extension = extension;
      this.code = code;
      this.sampleCode = sampleCode;
    }
  }

  let c= new Language(
    "C",
    "c",
    "c",
    `#include<stdio.h>
  
  int main(){
      printf("Hello World");
      return 0;
  }`
  )
  
  let cpp = new Language(
    "C++",
    "cpp",
    "cpp",
    `#include<bits/stdc++.h>
  using namespace std;
  
  int main(){
      cout << "Hello World";
      return 0;
  }`
  );
  
  let python = new Language("Python", "py", "python", `print("Hello World")`);
  
  let java = new Language(
    "Java",
    "java",
    "java",
    `public class Main {
        
      public static void main(String[] args) {
          System.out.println("Hello, World!"); 
      }
      
  }`
  );
  
  let ruby = new Language("Ruby", "rb", "ruby", `puts "Hello World"`);
  
  let swift = new Language("Swift", "swift", "swift", `print("Hello, World!") `);
  
  let kotlin = new Language(
    "Kotlin",
    "kt",
    "kotlin",
    `fun main(args: Array<String>) {
      println("Hello, World!")
  }`
  );
  
const languages = [ python,c,cpp, java, ruby, kotlin, swift];
const themes = [
  "monokai",
  "github",
  "tomorrow",
  "kuroir",
  "twilight",
  "xcode",
  "textmate",
  "solarized_dark",
  "solarized_light",
  "terminal"
];
const highlightedLangs = [
  "javascript",
  "java",
  "python",
  "xml",
  "ruby",
  "sass",
  "markdown",
  "mysql",
  "json",
  "html",
  "handlebars",
  "golang",
  "csharp",
  "elixir",
  "typescript",
  "css"
];

export {languages,themes,highlightedLangs};