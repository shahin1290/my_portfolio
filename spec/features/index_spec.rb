describe 'Index Page', type: :feature do
    it 'displays project list' do
        visit '/'

        expect(page).to have_css '#info'
        within '#info' do
            expect(page).to have_content 'MD SHAHIN PATOWARY'
            expect(page).to have_content 'Junior Full Stack Web Developer'
        end
    end
end