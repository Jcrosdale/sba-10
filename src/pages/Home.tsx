import useFetchData from '../hooks/useFetch';
import type { Category } from '../types';

const categoryUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function Home() {
    const { data, loading, error } = useFetchData<{ categories: Category[] }>(categoryUrl);
}