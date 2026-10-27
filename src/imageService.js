// Enhanced Photo Fetcher for Discovered Landmarks and Regional Foods
export async function fetchPlacePhoto(placeName, countryName = '') {
  try {
    const cleanPlace = placeName
      .replace(/Day \d+[:\s]*/i, '')
      .replace(/\(.*\)/g, '')
      .trim();

    // Strategy 1: Wikipedia Search API to get exact main article title
    const searchRes = await fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(`${cleanPlace} ${countryName}`)}&format=json&origin=*`
    );

    if (searchRes.ok) {
      const searchData = await searchRes.json();
      const topResults = searchData.query?.search || [];
      
      // Filter out meta pages, lists, disambiguation
      const validArticle = topResults.find(r => 
        !r.title.toLowerCase().includes('list of') &&
        !r.title.toLowerCase().includes('disambiguation')
      );

      const targetTitle = validArticle ? validArticle.title : cleanPlace;

      // Strategy 2: Fetch high-resolution lead image of this exact page
      const imgRes = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(targetTitle)}&prop=pageimages&pithumbsize=1200&format=json&origin=*`
      );

      if (imgRes.ok) {
        const imgData = await imgRes.json();
        const pages = Object.values(imgData.query?.pages || {});
        const src = pages[0]?.thumbnail?.source;
        if (src && !src.includes('.svg') && !src.includes('.pdf') && !src.includes('flag') && !src.includes('logo')) {
          return src;
        }
      }
    }
  } catch (err) {
    console.warn(`Photo fetch failed for ${placeName}:`, err);
  }

  // Reliable, high quality fallbacks
  const countryKey = (countryName || '').toLowerCase();
  const countryVisuals = {
    japan: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    italy: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    france: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    spain: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
    india: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    mexico: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
    thailand: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80',
    usa: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80'
  };

  for (const k in countryVisuals) {
    if (countryKey.includes(k)) return countryVisuals[k];
  }

  return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80';
}
