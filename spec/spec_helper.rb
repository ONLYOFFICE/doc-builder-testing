# frozen_string_literal: true

Encoding.default_external = Encoding::UTF_8
require 'bundler/setup'
require 'rspec'
require_relative '../lib/doc_builder_testing'

# Get either DocBuilder of WebDocBuilder
# depending of env var
# @return [WebDocBuilderWrapper, DocBuilderWrapper]
def builder
  @builder ||= if ENV['BUILDER_PLATFORM'] == 'WEB'
                 WebDocBuilderWrapper.new
               else
                 DocBuilderWrapper.new
               end
end
