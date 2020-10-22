const categories = ["Food", "Drinks", "Desserts"];

const items = {
  food      : {
    Appetizers  : {
      name  : ["Salad", "Spam Fries", "Truffle Fries"],
      price : ["$3", "$4", "$5"]
    },
    Mains       : {
      name  : ["Wagyu Steak","Hamburger", "Fish & Chips"],
      price : ["$15","$12", "$10"]
    }
  },
  drinks    : {
    Juices : {
      name  : ["Orange", "Apple", "Lime"],
      price : ["$3", "$3", "$3"]
    },
    Cocktails:{
      name  : ["Bloody Mary", "Old Fashioned"],
      price   : ["$7", "$8"]
    }
  },
  Desserts  : {
    Cakes : {
      name    : ["Lava Cake", "Cheesecake"],
      price   : ["$5", "$5"]
    }
  }
};


const renderContent = () => {
  let wrapperSection = document.createElement('section');
  wrapperSection.classList.add('wrapper');

  let tabsHeader = document.createElement('ul');
  tabsHeader.classList.add('tabs');

  categories.map((e) => {
    let header = document.createElement('li');
    header.addEventListener("click", tabsHeaderClick);
    header.innerText = e;
    tabsHeader.appendChild(header);
  });

  wrapperSection.appendChild(tabsHeader);

  let tabsContents = document.createElement('ul');
  tabsContents.classList.add('tab__content');


  Object.keys(items).forEach((key1) => {
    let categoryContent = document.createElement('li');
    let categoryContentDiv = document.createElement('div');
    categoryContentDiv.classList.add('content__wrapper');
    Object.keys(items[key1]).forEach((key2, index2) => {
      let subCategoryContentTitle = document.createElement('h2');
      subCategoryContentTitle.innerText = `${Object.keys(items[key1])[index2]}`;
      categoryContentDiv.appendChild(subCategoryContentTitle);
      for(let i = 0; i < items[key1][key2]["name"].length; i++ ){
        let subCategoryContentName = document.createElement('p');
        let subCategoryContentPrice = document.createElement('p');
        subCategoryContentName.innerText = `${items[key1][key2]["name"][i]}`;
        subCategoryContentPrice.innerText = `${items[key1][key2]["price"][i]}`;
        categoryContentDiv.appendChild(subCategoryContentName);
        categoryContentDiv.appendChild(subCategoryContentPrice);
      };
    });
    categoryContent.appendChild(categoryContentDiv);
    tabsContents.appendChild(categoryContent);
  });

  wrapperSection.appendChild(tabsContents);

  return wrapperSection;
};

function indexInParent(node) {
  var children = node.parentNode.childNodes;
  var num = 0;
  for (var i=0; i<children.length; i++) {
       if (children[i]==node) return num;
       if (children[i].nodeType==1) num++;
  }
  return -1;
}

function tabsContentsChange (){
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
  var activeTabHeight = activeTab.outerHeight();
  tabWrapper.height(activeTabHeight);

  let tabsContents = document.querySelector('.tab__content').querySelectorAll('li');
  tabsContents.forEach(e => e.classList.remove('active'));
  tabsContents[indexInParent(document.querySelector('.tabs .active'))].classList.add('active');


  jQuery(activeTab).fadeOut(50, function() {
    activeTab = $(".tab__content > .active");
    activeTabHeight = activeTab.outerHeight();
    jQuery(tabWrapper).stop().delay(50).animate({
      height: activeTabHeight
    }, 250, function() {
      // Fade in active tab
      jQuery(activeTab).delay(20).fadeIn(250);
      }
    );
  });


};

function tabsHeaderClick () {
  let tabs = document.querySelector('.tabs').querySelectorAll('li');
  tabs.forEach(e => e.classList.remove('active'));
  this.classList.add('active');

  tabsContentsChange();
};

export {renderContent};