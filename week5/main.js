const hikeList = [
    {
      name: "Bechler Falls",
      imgSrc: "big-tree.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description:
        "Beautiful short hike along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead."
    },
    {
      name: "Teton Canyon",
      imgSrc: "big-tree.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      difficulty: "Easy",
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead."
    },
    {
      name: "Denanda Falls",
      imgSrc: "big-tree.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      difficulty: "Moderate",
      description:
        "Beautiful hike through Bechler meadows river to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead."
    }
  ];

  let hikesDiv = document.getElementById('hikes2');
  hikesDiv.innerHTML = '';
  for(let i = 0; i < hikeList.length; i++) {
      hikesDiv.innerHTML += `
        <h2 id='hikeName'>${hikeList[i].name}</h2><br>
        <div id='hikes'>
        <img src=${hikeList[i].imgSrc}></img>
        <div id='hike${+i}'>
        <h4>Distance</h4>
        <p>${hikeList[i].distance}</p>
        <h4>Difficulty</h4>
        <p>${hikeList[i].difficulty}</p>
        <h4>Description</h4>
        <p>${hikeList[i].description}</p>
        <h4>Directions</h4>
        <p>${hikeList[i].directions}</p>
        </div>
        </div>`;
  }