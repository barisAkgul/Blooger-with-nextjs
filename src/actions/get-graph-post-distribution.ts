import prismadb from "@/lib/prismadb";

interface GraphData {
  name: string;
  total: number;
}

export const getGraphPostDistribution = async (): Promise<GraphData[]> => {
  const allPosts = await prismadb.post.findMany();

  const monthlyPostDistribution: { [key: number]: number } = {};

  // Gruplandırılmış verileri hazırlama
  for (const post of allPosts) {
    const month = post.createdAt.getMonth(); // 0 for Jan, 1 for Feb, ...

    // Belirli bir aydaki post sayısını arttırma
    monthlyPostDistribution[month] = (monthlyPostDistribution[month] || 0) + 1;
  }

  // Grafik için veri formatını oluşturma
  const graphData: GraphData[] = [
    { name: "Jan", total: 0 },
    { name: "Feb", total: 0 },
    { name: "Mar", total: 0 },
    { name: "Apr", total: 0 },
    { name: "May", total: 0 },
    { name: "Jun", total: 0 },
    { name: "Jul", total: 0 },
    { name: "Aug", total: 0 },
    { name: "Sep", total: 0 },
    { name: "Oct", total: 0 },
    { name: "Nov", total: 0 },
    { name: "Dec", total: 0 },
  ];

  // Grafik verilerini doldurma
  for (const month in monthlyPostDistribution) {
    graphData[parseInt(month)].total = monthlyPostDistribution[parseInt(month)];
  }

  return graphData;
};
