import { ApexOptions } from 'apexcharts';
// @mui
import { Card, CardHeader, Box, CardProps } from '@mui/material';
// components
import Chart, { useChart } from '../../../../components/chart';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  chart: {
    labels: string[];
    colors?: string[];
    series: {
      name: string;
      type: string;
      fill?: string;
      data: number[];
    }[];
    options?: ApexOptions;
  };
}

export default function AnalyticsWebsiteVisits({ title, subheader, chart, ...other }: Props) {
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill) as string[],
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} visits`;
          }
          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }} dir='ltr'>
        <Chart type='line' series={series} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
