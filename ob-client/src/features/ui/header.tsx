import { User } from "@privy-io/react-auth";

export const Header = ({
  user,
  logout,
  authenticated,
}: {
  user?: User;
  logout: () => void;
  authenticated: boolean;
}) => {
  return (
    <header className="p-4 max-w-screen-xl mx-auto flex justify-between items-center">
      <div>
        <span className="font-medium text-xl underline underline-offset-4 decoration-brand-orange">
          Welcome
        </span>
        <span className="text-white/60">
          {user && user.email ? `, ${user.email.address}` : null}
        </span>
      </div>
      <div className="flex justify-end">
        {authenticated ? (
          <button
            className="text-sm bg-surface-level-2 py-2 px-4 rounded-full font-medium text-white/80"
            onClick={logout}
          >
            Logout
          </button>
        ) : <span>
          You are {authenticated ? "authenticated" : "not authenticated"}
        </span>
        }
      </div>
    </header>
  );
};
