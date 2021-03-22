import { map, Matcher, redirect } from 'navi';

interface Context {
  token: string;
}

//Dung de bao ve routes. Neu ban k dang nhap ban k the vao cac trang khac dc
export function withAuthentication(matcher: Matcher<{}, Context>) {
  return map((_, context: Context) => (context.token ? matcher : redirect('/')));
}
