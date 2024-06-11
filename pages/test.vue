<script lang="ts" setup>

</script>

<template>
  <div>
    <!--
// v0 by Vercel.
// https://v0.dev/t/H8afjW8oirM
-->

    <div class="mx-auto max-w-3xl rounded-lg bg-white p-8 text-gray-800 shadow-lg">
      <header class="mb-8">
        <h1 class="text-3xl font-bold">
          John Doe
        </h1>
        <p class="text-gray-600">
          Software Engineer
        </p>
      </header>
      <section class="mb-8">
        <h2 class="mb-4 text-xl font-bold">
          Personal Information
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="font-medium">
              Email:
            </p>
            <p>john.doe@example.com</p>
          </div>
          <div>
            <p class="font-medium">
              Phone:
            </p>
            <p>+1 (123) 456-7890</p>
          </div>
          <div>
            <p class="font-medium">
              Address:
            </p>
            <p>123 Main St, Anytown USA</p>
          </div>
          <div>
            <p class="font-medium">
              LinkedIn:
            </p>
            <a class="text-blue-500 hover:underline" href="#" rel="ugc">
              linkedin.com/in/johndoe
            </a>
          </div>
        </div>
      </section>
      <section class="mb-8">
        <h2 class="mb-4 text-xl font-bold">
          Work Experience
        </h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-medium">
              Software Engineer
            </h3>
            <p class="text-gray-600">
              Acme Corp, 2019 - Present
            </p>
            <ul class="list-disc pl-4 space-y-2">
              <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
              <li>Collaborated with cross-functional teams to design and implement new features</li>
              <li>Participated in code reviews and pair programming sessions</li>
            </ul>
          </div>
          <div>
            <h3 class="font-medium">
              Intern, Software Development
            </h3>
            <p class="text-gray-600">
              XYZ Inc, 2018 - 2019
            </p>
            <ul class="list-disc pl-4 space-y-2">
              <li>Contributed to the development of a mobile app using React Native</li>
              <li>Assisted in testing and debugging existing applications</li>
              <li>Participated in daily stand-up meetings and sprint planning</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="mb-8">
        <h2 class="mb-4 text-xl font-bold">
          Education
        </h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-medium">
              Bachelor of Science in Computer Science
            </h3>
            <p class="text-gray-600">
              University of Example, 2015 - 2019
            </p>
            <p>GPA: 3.8</p>
          </div>
        </div>
      </section>
      <section class="mb-8">
        <h2 class="mb-4 text-xl font-bold">
          Skills
        </h2>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <p class="font-medium">
              Programming Languages:
            </p>
            <p>JavaScript, Python, Java</p>
          </div>
          <div>
            <p class="font-medium">
              Frameworks and Libraries:
            </p>
            <p>React, Node.js, MongoDB</p>
          </div>
          <div>
            <p class="font-medium">
              Tools and Technologies:
            </p>
            <p>Git, Docker, AWS</p>
          </div>
          <div>
            <p class="font-medium">
              Other Skills:
            </p>
            <p>Agile Methodology, Problem-solving, Teamwork</p>
          </div>
        </div>
      </section>
      <section>
        <h2 class="mb-4 text-xl font-bold">
          References
        </h2>
        <div class="space-y-4">
          <div>
            <h3 class="font-medium">
              Jane Smith
            </h3>
            <p class="text-gray-600">
              Engineering Manager, Acme Corp
            </p>
            <p>jane.smith@acme.com</p>
            <p>+1 (987) 654-3210</p>
          </div>
          <div>
            <h3 class="font-medium">
              Bob Johnson
            </h3>
            <p class="text-gray-600">
              CTO, XYZ Inc
            </p>
            <p>bob.johnson@xyz.com</p>
            <p>+1 (456) 789-0123</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="less">
// grid styles
.grid-wrapper {
    min-height: 100vh;
    display: flex;
    min-width: 100vw;
    box-sizing: border-box;
    position: relative;

    .images-grid {
        display: grid;
        padding: 0.5rem;
        box-sizing: border-box;
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 0.5rem;

        &>div {
            height: 25rem;

            &.primary {
                grid-column: span 1 / span 1;
            }

            &.secondary {
                grid-column: span 1 / span 1;
            }
        }
    }
}

// responsive styles
@media (min-width: 1280px) {
    .images-grid {
        background-color: rgb(255, 255, 255);
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
    }
}

@media (min-width: 768px) {
    .grid-wrapper {
        .images-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 1rem;
            gap: 1rem;

            &>div {
                &.primary {
                    grid-column: span 2 / span 2;
                }

                &.secondary {
                    grid-column: span 1 / span 1;
                }
            }
        }
    }
}

@media (min-width: 1024px) {
    .grid-wrapper {
        .images-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));

            &>div {
                &.primary {
                    grid-column: span 4 / span 4;
                }

                &.secondary {
                    grid-column: span 2 / span 4;
                }
            }
        }
    }
}
</style>
