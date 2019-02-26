require 'test_helper'

class AgentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get agent_index_url
    assert_response :success
  end

  test "should get show" do
    get agent_show_url
    assert_response :success
  end

end
