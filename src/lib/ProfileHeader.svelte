<script>
    export let resumeData;
  </script>
  
  <header class="header">
    <img src="https://media.licdn.com/dms/image/D5603AQEpuj47L8XjNQ/profile-displayphoto-shrink_200_200/0/1686328359598?e=1699488000&v=beta&t=cQL7G2lWkmbm_nmMZGiizJQX1qlKWzjqxm5SgI1pNNc" alt="Brian T. Slate Profile Photo">
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
    }

    .header {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      background-color: rgba(255, 255, 255, 0.6);
      margin-bottom: 1.5rem;
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
      font-size: 2.5em; /* Makes the name larger */
    }
  
    .header-text p {
      font-size: 1.5em; /* Makes the title larger */
    }
  </style>
  