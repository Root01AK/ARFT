const filterBtn = document.querySelectorAll('.filterBtn');
const boxes = document.querySelectorAll('.box');
const searchBox = document.querySelector('.search');

// Product Filter For Search Input START
searchBox.addEventListener('keyup',(e)=>{
    searchText = e.target.value.toLowerCase().trim();

    boxes.forEach((box)=>{
        const data = box.dataset.item;
        if(data.includes(searchText)) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });

    filterBtn.forEach((button)=>{
        button.classList.remove('btn-clicked');
      });
      filterBtn[0].classList.add('btn-clicked');
});
// Product Filter For Search Input END

// Product Filter For Button START
filterBtn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
  
      e.preventDefault();
      setActiveBtn(e);
      const btnfilter = e.target.dataset.filter;
      
      boxes.forEach((box=>{
        if(btnfilter == 'all'){
          box.style.display="block";
        }else{
  
          const boxfilter=box.dataset.item;
          if(btnfilter == boxfilter){
            box.style.display="block";
          }else{
            box.style.display="none";
          }
          
        }
      }));
  
  
    });
});

  function  setActiveBtn(e){
    filterBtn.forEach((button)=>{
      button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
  }
// Product Filter For Button END