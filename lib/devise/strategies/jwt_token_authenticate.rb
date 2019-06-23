# frozen_string_literal: true

module Devise
  module Strategies
    class JwtTokenAuthenticate < Authenticatable
      def valid?
        jwt_token.present?
      end

      def authenticate!
        return fail(:invalid_login) unless jwt_token

        user_data = JwtService.decode(jwt_token)
        user = User.find_by(user_data[:id])

        user ? success!(user) : fail(:invalid_login)
      rescue JWT::ExpiredSignature
        fail(:invalid_login)
      end

      private

      def jwt_token
        request.headers['user-authenticate-token']
      end
    end
  end
end
