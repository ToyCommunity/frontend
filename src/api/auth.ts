import api from './api';

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const todoApi = {
  get: async () => {
    const { data } = await api.get<Todo[]>('/todos');

    return data;
  }
};

/**위 예제는 샘플 코드입니다.
 * auth api가 정의되면 이 파일을 수정해주세요.
 * */ 