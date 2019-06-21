# frozen_string_literal: true

require 'jwt'

class JwtService
  TOKEN_EXPIRE = 24.hours.from_now.to_i
  SECRET_KEY = 'abcdef'

  def self.encode(payload)
    payload[:exp] = TOKEN_EXPIRE
    JWT.encode(payload, SECRET_KEY)
  end

  def self.decode(token)
    JWT.decode(token, SECRET_KEY)[0]
  end
end
