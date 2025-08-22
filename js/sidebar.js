// ---------- Sidebars ----------
const sidebars = {
  tutorials: `
    <!-- Tutorials Sidebar -->
    <aside id="sidebar">
      <ul class="menu">
        <h4>Tutorials</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/intro.html" href="#">Java</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/intro.html" href="#">Spring</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/springboot/intro.html" href="#">SpringBoot</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/ms/intro.html" href="#">Microservices</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/kafka.html" href="#">Kafka</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/java8/intro.html" href="#">Java 8 Features</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/cheatsheets.html" href="#">Java Cheat Sheet</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/database.html" href="#">Database</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/dp/intro.html" href="#">Design Patterns</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/sorting/bubble.html" href="#">Java Sorting</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/dsa/dsa.html" href="#">Data Structures and Algorithms</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/interview/iqa.html" href="#">Interview Questions</a></li>
        <h4>Tutorials</h4>
      </ul>
    </aside>
  `,

  java: `
    <!-- Java Sidebar -->
    <aside id="sidebar">
      <ul class="menu">
        <h4>Java Basic</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/intro.html" href="#">Java Introduction</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/history.html" href="#">History of Java</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/features.html" href="#">Features of Java</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/jdk.html" href="#">JDK vs JRE vs JVM</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/jvm.html" href="#">JVM - Java Virtual Machine</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/gc.html" href="#">Garbage Collection</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/variables.html" href="#">Variables</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/datatypes.html" href="#">Data Types</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/operators.html" href="#">Operators</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/string.html" href="#">Java String</a></li>
        <h4>Java Flow Control</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/ifelse.html" href="#">Java If-else</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/switchcase.html" href="#">Java Switch-Case</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/forloop.html" href="#">Java For loop</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/whileloop.html" href="#">Java while loop</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/dowhile.html" href="#">Java do-while loop</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/continue.html" href="#">Continue statement</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/break.html" href="#">break statement</a></li>
        <h4>Java Arrays</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/arrays.html" href="#">Java Arrays</a></li>
        <h4>OOPs Concepts</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/oops.html" href="#">OOPs Concepts</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/absract.html" href="#">Abstraction</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/encapsulation.html" href="#">Encapsulation</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/inheritance.html" href="#">Inheritance</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/polymorphism.html" href="#">Polymorphism</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/aggregation.html" href="#">Aggregation</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/association.html" href="#">Association</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/composition.html" href="#">Composition</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/overloadingvsoverriding.html" href="#">Overloading vs Overriding</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/abstractvsinterface.html" href="#">Abstract class vs interface</a></li>
        <h4>Java Exception Handling</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/exception-handling.html" href="#">Exception handling</a></li>
        <h4>Java Multithreading</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/multithreading.html" href="#">Multithreading</a></li>
        <h4>Java Serialization</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/serialization.html" href="#">Serialization</a></li>
        <h4>Java Synchronization</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/synchronization.html" href="#">Synchronization</a></li>
        <h4>Java Sorting</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/comparable.html" href="#">Comparable interface</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/comparator.html" href="#">Comparator interface</a></li>
        <h4>Collections Framework</h4>
        <li class="nav-item"><a class="nav-link" data-href="/java/collections.html" href="#">Collections in Java</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/arraylist.html" href="#">Java ArrayList</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/linkedlist.html" href="#">Java LinkedList</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/vector.html" href="#">Java Vector</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/hashset.html" href="#">Java HashSet</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/linkedhashset.html" href="#">Java LinkedHashSet</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/treeset.html" href="#">Java TreeSet</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/hashmap.html" href="#">Java HashMap</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/hashmap-internal.html" href="#">Java HashMap Working</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/treemap.html" href="#">Java TreeMap</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/linkedhashmap.html" href="#">Java LinkedHashMap</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/syncronized_collection.html" href="#">Syncronized Collections</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/concurrent.html" href="#">Concurrent Collections</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/weak.html" href="#">Weak Collections</a></li>
        <h4>Interview Special</h4>
        <li class="nav-item"><a class="nav-link" data-href="/interview/java/java-interview-questions.html" href="#">Java Interview Questions</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/interview/java/java-collections.html" href="#">Collections interview questions</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/javaprograms.html" href="#">Java programs</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/java/random.html" href="#">Java Miscellaneous</a></li>
        <br>
        <br>
        <br>
      </ul>
    </aside>
  `,

  spring: `
    <!-- Spring Sidebar -->
    <aside id="sidebar">
      <ul class="menu">
        <h4>Spring Framework</h4>
        <li class="nav-item"><a class="nav-link" data-href="/spring/intro.html" href="#">Spring Introduction</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/core.html" href="#">Spring Core</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/beans.html" href="#">Spring Beans</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/di.html" href="#">Dependency Injection</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/aop.html" href="#">Aspect Oriented Programming</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/mvc.html" href="#">Spring MVC</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/security.html" href="#">Spring Security</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/data.html" href="#">Spring Data</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/boot.html" href="#">Spring Boot</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/spring/cloud.html" href="#">Spring Cloud</a></li>
      </ul>
    </aside>
  `,

  interview: `
    <!-- Interview Sidebar -->
    <aside id="sidebar">
      <ul class="menu">
        <h4>Interview Preparation</h4>
        <li class="nav-item"><a class="nav-link" data-href="/interview/java/questions.html" href="#">Java Questions</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/interview/java/questions.html" href="#">Java 8 Questions</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/interview/spring/questions.html" href="#">Spring Questions</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/interview/spring/questions.html" href="#">SpringBoot Questions</a></li>
        <li class="nav-item"><a class="nav-link" data-href="/interview/ms/questions.html" href="#">Microservices Questions</a></li>
      </ul>
    </aside>
  `
};
