<script>
    export let resumeData;
  </script>
  
  <header class="header">
    <img src="/me.jpeg" alt="Brian T. Slate Profile" />
    <div class="header-text">
      <h1>{resumeData.name}</h1>
      <p>{resumeData.title}</p>
    </div>
  </header>
  
  <style>
    header {
        column-span: all;
        background-color: #f3f3f3;
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 8px solid var(--color-theme-5);
        border-radius: 10px;
        box-shadow: 0px 9px 9px -3px rgba(0,0,0,0.3);
    }

    .header {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      background-color: rgba(255, 255, 255, 0.6);
      margin-bottom: 1.5rem;
      /* text-align:right; */
    }
  
    .header::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/background.webp');
      background-size: cover;
      background-repeat: repeat;
      opacity: 0.2;
      z-index: -1;
    }
  
    .header-text h1 {
      font-size: 2.5em; /* Brian Slate */
    }
  
    .header-text p {
      font-size: 1.5em; /* Title */
    }

    @media (max-width: 750px) { /* tablet */
      .header {
        font-size: 1rem;
        align-items: flex-start;
      }
    }
    @media (max-width: 660px) { /* tablet */
      .header p {
        font-size: 1.2rem;
      }
    }
  </style>
  