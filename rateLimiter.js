const maxRequestsPerSecond = 2;

async function fetchData(i) {
  try {
    const response = await fetch(`https://dummyjson.com/products/${i}`).then(
      (res) => res.json()
    );
    console.log(response.title);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

async function makeTwoApiCallPerSecond() {
  for (let i = 0; i < 100; i++) {
    fetchData(i);
    if (i % maxRequestsPerSecond === 1) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

makeTwoApiCallPerSecond();
